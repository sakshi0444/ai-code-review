# AI Logo Generator

This project is an AI-powered logo generator that creates custom logos based on text descriptions. It uses OpenAI's DALL-E model to generate high-quality, professional logos.

## Features

- Simple, intuitive user interface
- AI-powered logo generation
- High-quality image output
- Download functionality for generated logos
- Responsive design for all devices

## Project Structure

The project consists of two main parts:

1. **Frontend**: React application with a simple UI for entering prompts and displaying generated logos
2. **Backend**: Express.js server that handles API requests and communicates with AI services

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

## Setup Instructions

### Backend Setup

1. Navigate to the Backend directory:
   ```
   cd Backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the Backend directory with your API keys:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   GOOGLE_GEMINI_KEY=your_gemini_api_key_here
   ```

4. Start the backend server:
   ```
   npm start
   ```

The server will run on http://localhost:3000

### Frontend Setup

1. Navigate to the Frontend directory:
   ```
   cd Frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

The frontend will run on http://localhost:5173 (or another port if 5173 is in use)

## How to Use

1. Open the application in your browser
2. Enter a detailed description of the logo you want to generate
   - Be specific about colors, style, and elements you want in the logo
   - Example: "A minimalist logo for a tech startup with blue and green colors, featuring a stylized mountain and a circuit board pattern"
3. Click the "Generate Logo" button
4. Wait for the AI to generate your logo (this may take a few seconds)
5. Once generated, you can download the logo using the "Download Logo" button

## API Endpoints

- `POST /ai/generate-logo`: Generates a logo based on the provided prompt
  - Request body: `{ "prompt": "Your logo description here" }`
  - Response: `{ "imageUrl": "URL to the generated image" }`

## Technologies Used

- **Frontend**:
  - React
  - Axios for API requests
  - CSS for styling

- **Backend**:
  - Express.js
  - OpenAI API (DALL-E) for image generation
  - Google Gemini API (for code review functionality)

## License

MIT

## Acknowledgements

- OpenAI for providing the DALL-E API
- Google for providing the Gemini API

