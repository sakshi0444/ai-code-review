const OpenAI = require('openai');

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generates a logo image based on the provided prompt
 * @param {string} prompt - The description of the logo to generate
 * @returns {Promise<string>} - URL of the generated image
 */
async function generateLogoImage(prompt) {
    try {
        // Enhance the prompt for better logo generation
        const enhancedPrompt = `Create a professional, high-quality logo with the following description: ${prompt}. The logo should be clean, modern, and suitable for business use. Make it visually appealing with good contrast and clear shapes.`;
        
        const response = await openai.images.generate({
            model: "dall-e-3", // Using DALL-E 3 for higher quality
            prompt: enhancedPrompt,
            n: 1, // Generate 1 image
            size: "1024x1024", // Standard size for logos
            quality: "standard",
            response_format: "url",
        });

        return response.data[0].url;
    } catch (error) {
        console.error("Error generating logo:", error);
        throw error;
    }
}

module.exports = {
    generateLogoImage
};

