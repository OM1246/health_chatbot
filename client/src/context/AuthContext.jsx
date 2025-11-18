import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Set base URL for axios
axios.defaults.baseURL = 'http://localhost:5000/api';

// Add auth token to requests if it exists
const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Check if user is logged in
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            loadUser();
        } else {
            setLoading(false);
        }
    }, []);

    // Load user data
    const loadUser = async () => {
        try {
            const res = await axios.get('/auth/me');
            setUser(res.data);
            setLoading(false);
        } catch (err) {
            localStorage.removeItem('token');
            setAuthToken(null);
            setLoading(false);
        }
    };

    // Register user
    const register = async (userData) => {
        try {
            const res = await axios.post('/auth/register', userData);
            localStorage.setItem('token', res.data.token);
            setAuthToken(res.data.token);
            setUser(res.data);
            setError(null);
            return { success: true };
        } catch (err) {
            const message = err.response?.data?.message || 'Registration failed';
            setError(message);
            return { success: false, message };
        }
    };

    // Login user
    const login = async (userData) => {
        try {
            const res = await axios.post('/auth/login', userData);
            localStorage.setItem('token', res.data.token);
            setAuthToken(res.data.token);
            setUser(res.data);
            setError(null);
            return { success: true };
        } catch (err) {
            const message = err.response?.data?.message || 'Login failed';
            setError(message);
            return { success: false, message };
        }
    };

    // Logout user
    const logout = () => {
        localStorage.removeItem('token');
        setAuthToken(null);
        setUser(null);
    };

    // Clear errors
    const clearErrors = () => {
        setError(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                error,
                register,
                login,
                logout,
                clearErrors,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};