import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { register, error, clearErrors } = useAuth();
    const navigate = useNavigate();

    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (error) {
            clearErrors();
        }

        if (password !== password2) {
            alert('Passwords do not match');
            return;
        }

        const userData = {
            name,
            email,
            password,
        };

        const response = await register(userData);

        if (response.success) {
            navigate('/chat');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form-container">
                <h2>Create an Account</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2}
                            onChange={onChange}
                            minLength="6"
                            required
                        />
                    </div>
                    <button type="submit" className="btn primary-btn">
                        Register
                    </button>
                </form>
                <p>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;