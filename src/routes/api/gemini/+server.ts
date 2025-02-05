import { json, error } from '@sveltejs/kit';
import { GEMINI_API_KEY } from '$env/static/private';

export const POST = async ({ request }) => {
    try {
        const formData = await request.formData();
        const prompt = formData.get('prompt') as string;
        const images = formData.getAll('files') as File[];

        if (!prompt) {
            throw error(400, 'Prompt is required');
        }

        // Check for specific keywords in the prompt
        const keywordCheck = (input: string) => {
            const creatorKeywords = [
                'who made you',
                'who created you',
                'who is your creator',
                'who built you'
            ];
            const companyKeywords = [
                'which company created you',
                'which company made you',
                'what company created you',
                'what company made you'
            ];

            if (creatorKeywords.some((keyword) => input.toLowerCase().includes(keyword))) {
                return 'I was created by Sanjai.';
            } else if (companyKeywords.some((keyword) => input.toLowerCase().includes(keyword))) {
                return 'I was created by Sanjai, who is associated with shaaru.';
            }
            return null; // No match found
        };

        // If the prompt matches a keyword, return a predefined response
        const predefinedResponse = keywordCheck(prompt);
        if (predefinedResponse) {
            return json({ text: predefinedResponse });
        }

        const model = 'gemini-2.0-flash-exp'; // Vision model for image support
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
        const requestBody: any = {
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

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw error(response.status, errorDetails.error?.message || 'Unknown error from Gemini API');
        }

        const data = await response.json();
        const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini';

        return json({ text: textResponse });
    } catch (err) {
        console.error('Server error:', err);
        return json(
            { error: err instanceof Error ? err.message : 'An error occurred' },
            { status: 500 }
        );
    }
};