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

export const signup = async (pseudo: string, password: string, email: string, role: string, parrain: number) => {
    try {
        if (parrain) {
            const response = await axios.post(`${API_BASE_URL}/authentification/signup`, { pseudo: pseudo, mot_de_passe: password, email: email, role: role, parrain: parrain });
            return response.data;
        }
        else {
            const response = await axios.post(`${API_BASE_URL}/authentification/signup`, { pseudo: pseudo, mot_de_passe: password, email: email, role: role });
            return response.data;
        }
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de l\'inscription');
    }
};

export default { login, signup };