import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css';

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="home-container">
            <div className="hero-section">
                <h1>Welcome to HealthBot</h1>
                <p>Your personal health assistant powered by AI</p>
                {!user ? (
                    <div className="cta-buttons">
                        <Link to="/register" className="btn primary-btn">
                            Get Started
                        </Link>
                        <Link to="/login" className="btn secondary-btn">
                            Login
                        </Link>
                    </div>
                ) : (
                    <div className="cta-buttons">
                        <Link to="/chat" className="btn primary-btn">
                            Start Chatting
                        </Link>
                    </div>
                )}
            </div>

            <div className="features-section">
                <h2>Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>24/7 Availability</h3>
                        <p>Get health advice anytime, anywhere</p>
                    </div>
                    <div className="feature-card">
                        <h3>AI-Powered</h3>
                        <p>Powered by Google's Gemini AI for accurate responses</p>
                    </div>
                    <div className="feature-card">
                        <h3>Secure & Private</h3>
                        <p>Your health data is protected with industry-standard security</p>
                    </div>
                </div>
            </div>

            <div className="how-it-works-section">
                <h2>How It Works</h2>
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Sign Up</h3>
                        <p>Create your account in seconds</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>Ask Questions</h3>
                        <p>Get health advice from our AI assistant</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Get Answers</h3>
                        <p>Receive accurate, personalized health information</p>
                    </div>
                </div>
            </div>

            <div className="testimonials-section">
                <h2>What Our Users Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>"HealthBot has been a game-changer for managing my health questions. The AI responses are incredibly accurate and helpful!"</p>
                        <div className="testimonial-author">- Sarah M.</div>
                    </div>
                    <div className="testimonial-card">
                        <p>"I love having 24/7 access to health information. It's like having a personal health assistant at my fingertips."</p>
                        <div className="testimonial-author">- John D.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;