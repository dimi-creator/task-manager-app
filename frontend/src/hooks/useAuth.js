import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
    const { setAuth } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/login', { email, password });
            setAuth(response.data);
            setError(null);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post('/api/register', userData);
            setAuth(response.data);
            setError(null);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/logout');
            setAuth(null);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return { login, register, logout, error };
};

export default useAuth;