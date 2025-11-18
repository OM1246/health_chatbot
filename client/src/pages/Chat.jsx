import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([
        {
            text: "Hello! I'm your health assistant. How can I help you today?",
            isBot: true,
        },
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const { user } = useAuth();

    // Scroll to bottom of chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!inputText.trim() || isLoading) return;

        // Add user message
        const userMessage = { text: inputText, isBot: false };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            // Send message to backend
            const res = await axios.post('/chat/message', { message: inputText });

            // Add bot response
            const botMessage = { text: res.data.response, isBot: true };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMessage = {
                text: 'Sorry, I encountered an error. Please try again.',
                isBot: true
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearChat = () => {
        setMessages([
            {
                text: "Hello! I'm your health assistant. How can I help you today?",
                isBot: true,
            },
        ]);
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h2>Health Chat Assistant</h2>
                <p>Welcome, {user?.name}!</p>
                <button className="clear-chat-btn" onClick={handleClearChat}>
                    Clear Chat
                </button>
            </div>

            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
                    >
                        <div className="message-content">
                            {message.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="message bot-message">
                        <div className="message-content typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form className="chat-input" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your health question here..."
                    disabled={isLoading}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
                />
                <button
                    type="submit"
                    className="send-button"
                    disabled={isLoading || !inputText.trim()}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chat;