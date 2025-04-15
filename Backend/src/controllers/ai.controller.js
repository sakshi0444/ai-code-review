const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body.code;

        if (!code) {
            return res.status(400).send("Prompt is required");
        }

        // Call the aiService function correctly
        const response = await aiService(code);

        res.send(response);
    } catch (error) {
        console.error("Error in getReview:", error);
        res.status(500).send("An error occurred");
    }
};