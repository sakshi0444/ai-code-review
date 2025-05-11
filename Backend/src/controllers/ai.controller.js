const { generateCodeReview } = require("../services/ai.service");
const { generateLogoImage } = require("../services/logo.service");

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body.code;

        if (!code) {
            return res.status(400).send("Code is required");
        }

        const response = await generateCodeReview(code);
        res.send(response);
    } catch (error) {
        console.error("Error in getReview:", error);
        res.status(500).send("An error occurred");
    }
};

module.exports.generateLogo = async (req, res) => {
    try {
        const prompt = req.body.prompt;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const imageUrl = await generateLogoImage(prompt);
        res.json({ imageUrl });
    } catch (error) {
        console.error("Error in generateLogo:", error);
        res.status(500).json({ error: "Failed to generate logo" });
    }
};

