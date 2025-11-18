import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { login, error, clearErrors } = useAuth();
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (error) {
            clearErrors();
        }

        const userData = {
            email,
            password,
        };

        const response = await login(userData);

        if (response.success) {
            navigate('/chat');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form-container">
                <h2>Login to Your Account</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            minLength="6"
                            required
                        />
                    </div>
                    <button type="submit" className="btn primary-btn">
                        Login
                    </button>
                </form>
                <p>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;