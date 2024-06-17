import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

export const login = async (pseudo: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/authentification/login`, { pseudo: pseudo, mot_de_passe:  password });
        return response;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la connexion');
    }
};

export const signup = async (pseudo: string, password: string, email: string, role: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/authentification/register`, { pseudo: pseudo, mot_de_passe: password, email: email, role: role });
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de l\'inscription');
    }
};

export default { login, signup };