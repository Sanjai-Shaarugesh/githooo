import { json, error } from '@sveltejs/kit';
import { GEMINI_API_KEY } from '$env/static/private';



export const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const prompt = formData.get('prompt') as string;
    const images = formData.getAll('files') as File[]; // Adjusted to expect 'files' key

    //console.log('Received prompt:', prompt);
   // console.log('Received images:', images.length);

    if (!prompt) {
      throw error(400, 'Prompt is required');
    }

    const model = 'gemini-1.5-flash'; // Use the vision model for image support
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;

    const requestBody: any = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    };

    
    if (images.length > 0) {
      const imageParts = await Promise.all(images.map(async (image) => {
        const arrayBuffer = await image.arrayBuffer();
        const base64Image = Buffer.from(arrayBuffer).toString('base64');
        return {
          inlineData: {
            mimeType: image.type,
            data: base64Image
          }
        };
      }));
      requestBody.contents[0].parts.push(...imageParts); // Push the image data into the request body
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
    return json({ error: err instanceof Error ? err.message : 'An error occurred' }, { status: 500 });
  }
};
