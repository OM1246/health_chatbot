# AI Agent Instructions for Health Chatbot

This document provides essential knowledge for AI agents working with this health chatbot application.

## Project Architecture

This is a full-stack health chatbot application with a clear separation between frontend (React/Vite) and backend (Node.js/Express) services:

```
client/          # React frontend with Vite
  src/
    components/  # Reusable UI components
    context/     # React Context for auth state
    pages/       # Route-specific components
    services/    # API integration layer
server/          # Express backend
  controllers/   # Route handlers
  middleware/    # Express middlewares
  models/        # Mongoose models
  routes/        # API route definitions
```

### Key Integration Points

1. Authentication Flow:
   - Frontend auth context (`client/src/context/AuthContext.jsx`) manages user state
   - JWT tokens stored in localStorage with expiry handling
   - Protected routes require valid token in Authorization header

2. Chat Integration:
   - Messages flow: Chat.jsx → chatController.js → Gemini API
   - Responses streamed back through the same path

## Development Workflows

### Running the Application

1. Backend (from project root):
   ```
   cd server
   npm install
   npm run server
   ```

2. Frontend (new terminal):
   ```
   cd client
   npm install
   npm run dev
   ```

### Required Environment Setup

The server requires a `.env` file in `/server` with:
```
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
```

## Project-Specific Patterns

1. API Error Handling:
   - Backend uses centralized error handling middleware
   - Frontend services wrap Axios calls in try-catch with toast notifications

2. State Management:
   - Global auth state uses Context API instead of Redux
   - Component-level state uses React hooks

3. Frontend Routing:
   - Private routes wrapped with auth protection HOC
   - URL parameters for chat sessions

## Common Operations

- Adding a new API endpoint:
  1. Define route in `server/routes/`
  2. Create controller in `server/controllers/`
  3. Add service method in `client/src/services/`

- Adding a new page:
  1. Create component in `client/src/pages/`
  2. Add route in App.jsx
  3. Add navigation in Navbar.jsx if needed

Remember: Always validate auth token for protected routes and handle API errors consistently using the established patterns.