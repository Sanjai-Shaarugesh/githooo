import { json, error } from '@sveltejs/kit';
import { AI_API } from '$env/static/private';

const MAX_RETRIES = 3; // Maximum number of retries
const RETRY_DELAY_MS = 1000; // Initial delay between retries

async function fetchWithRetry(
	url: string | URL | Request,
	options: RequestInit | undefined,
	retries = MAX_RETRIES
) {
	try {
		const response = await fetch(url, options);
		if (response.status === 429 && retries > 0) {
			// Retry after a delay if rate-limited
			await new Promise((resolve) =>
				setTimeout(resolve, RETRY_DELAY_MS * (MAX_RETRIES - retries + 1))
			);
			return fetchWithRetry(url, options, retries - 1);
		}
		if (!response.ok) {
			const errorDetails = await response.json();
			throw error(response.status, errorDetails.error?.message || 'Unknown error from AI_API');
		}
		return response;
	} catch (err) {
		if (retries > 0) {
			// Retry on network errors or other transient issues
			await new Promise((resolve) =>
				setTimeout(resolve, RETRY_DELAY_MS * (MAX_RETRIES - retries + 1))
			);
			return fetchWithRetry(url, options, retries - 1);
		}
		throw err;
	}
}

export const POST = async ({ request }: { request: Request }) => {
	try {
		const formData = await request.formData();
		const prompt = formData.get('prompt') as string;
		const images = formData.getAll('files') as File[];

		// Handle empty requests (e.g., from "Clear Chat")
		if (!prompt && !images.length) {
			return json({ message: 'Chat cleared successfully.' });
		}

		if (!prompt) {
			throw error(400, 'Prompt is required');
		}

		// Check for specific keywords in the prompt
		const keywordCheck = (input: string) => {
			const creatorKeywords = ['who made you', 'who created you'];
			const companyKeywords = ['which company created you'];
			const creatorsKeywords = ['who created you'];
			const CreatorKeywords = ['which created you'];
			const aCreatorKeywords = ['where created you'];

			if (creatorKeywords.some((keyword) => input.toLowerCase().includes(keyword))) {
				return 'I was created by Sanjai.';
			} else if (companyKeywords.some((keyword) => input.toLowerCase().includes(keyword))) {
				return 'I was created by Sanjai, who is associated with shaaru.';
			} else if (creatorsKeywords.some((keyword) => input.toLowerCase().includes(keyword))) {
				return 'I was created by Sanjai, who is associated with shaaru.';
			} else if (CreatorKeywords.some((keyword) => input.toLowerCase().includes(keyword))) {
				return 'I was created by Sanjai, who is associated with shaaru.';
			} else if (aCreatorKeywords.some((keyword) => input.toLowerCase().includes(keyword))) {
				return 'I was created by Sanjai, who is associated with shaaru.';
			} else {
				return null;
			}
		};

		const predefinedResponse = keywordCheck(prompt);
		if (predefinedResponse) {
			return json({ text: predefinedResponse });
		}

		const model = 'gemini-2.0-flash-exp';
		const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${AI_API}`;
		const requestBody: {
			contents: Array<{
				parts: Array<{ text: string } | { inlineData: { mimeType: string; data: string } }>;
			}>;
		} = {
			contents: [
				{
					parts: [{ text: prompt }]
				}
			]
		};

		if (images.length > 0) {
			const imageParts = await Promise.all(
				images.map(async (image) => {
					const arrayBuffer = await image.arrayBuffer();
					const base64Image = Buffer.from(arrayBuffer).toString('base64');
					return {
						inlineData: {
							mimeType: image.type,
							data: base64Image
						}
					};
				})
			);
			requestBody.contents[0].parts.push(...imageParts);
		}

		// Use the retry mechanism
		const response = await fetchWithRetry(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		const data = await response.json();
		const textResponse =
			data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini';

		return json({ text: textResponse });
	} catch (err) {
		console.error('Server error:', err);
		return json(
			{ error: err instanceof Error ? err.message : 'An error occurred' },
			{ status: 500 }
		);
	}
};
