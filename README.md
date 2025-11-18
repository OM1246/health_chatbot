# Health Chatbot Application

A full-stack health chatbot application with user authentication and AI-powered health assistance using Google's Gemini API.

## Features

- User authentication (Login/Signup)
- Health chatbot powered by Google's Gemini AI
- Responsive and modern UI
- Secure JWT-based authentication
- MongoDB for user data storage

## Tech Stack

### Frontend
- React.js with Vite
- React Router for navigation
- Axios for API requests
- CSS3 for styling

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Google Generative AI (Gemini) for chatbot functionality

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Google Gemini API key

## Setup Instructions

### Option 1: Run frontend and backend separately

#### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

4. Start the backend server:
   ```
   npm run server
   ```

#### Frontend Setup

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm run dev
   ```

### Option 2: Run both frontend and backend concurrently

1. From the root directory, install dependencies:
   ```
   npm install
   ```

2. Update the `.env` file in the server directory with your configuration

3. Run both servers concurrently:
   ```
   npm run dev
   ```

## Usage

1. Register a new account or login with existing credentials
2. Navigate to the chat page to interact with the health assistant
3. Ask health-related questions and receive AI-powered responses

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get authenticated user data

### Chat
- `POST /api/chat/message` - Send a message to the chatbot

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.