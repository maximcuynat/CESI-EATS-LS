import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import store from '../store/store';

// Fonction token JWT
const getAuthHeader = () => {
    const token = store.getState().user.token;
    if (token) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
};

export const getUserProfil = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/utilisateur/profil`, { headers : getAuthHeader() });
        return response.data.utilisateur;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération du profil utilisateur');
    }
}

export const updateUserProfil = async (pseudo?: string, email?: string) => {
    try {
        const body = {
            ...(pseudo && { pseudo }),
            ...(email && { email }),
        };
        const response = await axios.put(`${API_BASE_URL}/utilisateur/profil`, body, { headers: getAuthHeader() });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la modification du profil utilisateur');
    }
}

export const deleteUserProfil = async () => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/utilisateur/profil`, { headers: getAuthHeader() });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la suppression du profil utilisateur');
    }
}

export default { getUserProfil, updateUserProfil, deleteUserProfil };