import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

export const getRestaurateur = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/utilisateur/restaurateur`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération du restaurateur');
    }
};

export const updateRestaurateur = async (description? : string, path_image? : string, nom? : string, adresse_resto? : string) => {
    try {
        const body = {
            ...(description && { description }),
            ...(path_image && { path_image }),
            ...(nom && { nom }),
            ...(adresse_resto && { adresse_resto })
        };
        const response = await axios.put(`${API_BASE_URL}/utilisateur/restaurateur`, body);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la modification du restaurateur');
    }
}

export const addRestaurateur = async (description: string, path_image: string, nom: string, adresse_resto: string) => {
    try {
        const body = 
            { description : description,
            path_image : path_image,
            nom : nom,
            adresse_resto : adresse_resto
            };
        const response = await axios.post(`${API_BASE_URL}/utilisateur/restaurateur`, { body });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la création du restaurateur');
    }
}

export const deleteRestaurateur = async () => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/utilisateur/restaurateur`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la suppression du restaurateur');
    }
}

export default { getRestaurateur, updateRestaurateur, addRestaurateur, deleteRestaurateur };