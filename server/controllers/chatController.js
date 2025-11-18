const { GoogleGenerativeAI } = require('@google/generative-ai');

// @desc    Get chat response from Gemini
// @route   POST /api/chat/message
// @access  Private
const getChatResponse = async (req, res) => {
  const { message } = req.body;

  try {
    // Check if Gemini API key is set
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ message: 'Gemini API key not configured' });
    }

    // Initialize Google Generative AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    
    console.log('Gemini API Key exists:', !!process.env.GEMINI_API_KEY);
    console.log('Using model: gemini-2.5-flash-lite');

    // Create prompt for health-related queries
    const prompt = `You are a health assistant. Provide helpful and accurate health information for the following query. If the query is not health-related, politely redirect the user to ask health-related questions.
    
Query: ${message}

Response:`;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ message: 'Error processing your request' });
  }
};

module.exports = {
  getChatResponse,
};