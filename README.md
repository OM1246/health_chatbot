# Health Chatbot 🏥💬

<p align="center">
  <img src="client/src/assets/react.svg" alt="Health Chatbot Logo" width="150" height="150">
</p>

<p align="center">
  <strong>Your personal AI-powered health assistant</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#setup-instructions">Setup</a> •
  <a href="#api-endpoints">API</a> •
  <a href="#license">License</a>
</p>

---

A full-stack health chatbot application with user authentication and AI-powered health assistance using Google's Gemini API. This application provides a secure and responsive platform for users to get instant health-related advice and information.

## 🌟 Features

✨ **User Authentication**
- Secure signup and login functionality
- JWT-based session management
- Password encryption with Bcrypt

🤖 **AI-Powered Health Assistant**
- 24/7 availability for health inquiries
- Powered by Google's Gemini AI for accurate responses
- Context-aware conversation history

📱 **Modern & Responsive UI**
- Clean, intuitive interface
- Mobile-friendly design
- Smooth animations and transitions

🔒 **Security & Privacy**
- Industry-standard security practices
- Protected user data
- Secure API communication

## 🛠 Tech Stack

### Frontend
- [React.js](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) for navigation
- [Axios](https://axios-http.com/) for API requests
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) for styling

### Backend
- [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/) for authentication
- [Bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing
- [Google Generative AI (Gemini)](https://ai.google.dev/) for chatbot functionality

## 🚀 Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Google Gemini API key](https://ai.google.dev/)

### Environment Variables
Create a `.env` file in the `server` directory with the following variables:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
```

### Option 1: Run frontend and backend separately

#### Backend Setup
```bash
cd server
npm install
npm run server
```

#### Frontend Setup
```bash
cd client
npm install
npm run dev
```

### Option 2: Run both frontend and backend concurrently

```bash
npm install
npm run dev
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get authenticated user data

### Chat
- `POST /api/chat/message` - Send a message to the chatbot

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ for better health accessibility
</p>