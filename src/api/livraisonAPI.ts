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

export const getLivraison = async (id_livraison : string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/livraison/${id_livraison}`, { headers : getAuthHeader() });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération de la livraison');
    }
};

export const AddLivraison = async (id_commande : string, id_restaurant : string, id_etat : string, id_utilisateur_livreur : string, distance_trajet : string, adresse_client : string ) => {
    try {
        const body = {
            id_commande : id_commande,
            id_restaurant : id_restaurant,
            id_etat : id_etat,
            id_utilisateur_livreur : id_utilisateur_livreur,
            distance_trajet : distance_trajet,
            adresse_client : adresse_client
        };
        const response = await axios.post(`${API_BASE_URL}/livraison`, body, { headers : getAuthHeader() });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la création de la livraison');
    }
}

export const updateLivraison = async (id_livraison : string, adresse_client? : string, id_etat? : string) => {
    try {
        const body = {
            ...(adresse_client && { adresse_client }),
            ...(id_etat && { id_etat }),
        };
        const response = await axios.put(`${API_BASE_URL}/livraison/${id_livraison}`, body, { headers : getAuthHeader() });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la modification de la livraison');
    }
}

export const deleteLivraison = async (id_livraison : string) => {
    try {
        const body = {
            id_livraison : id_livraison
        };
        const response = await axios.delete(`${API_BASE_URL}/livraison`, { headers : getAuthHeader(), data : body }); // A tester c chelou
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la suppression de la livraison');
    }
}

export const getLivraisons = async (id_etat? : string) => {
    try {
        const headers = getAuthHeader();
        const params = {
            ...(id_etat && { id_etat }),
        };
        const response = await axios.get(`${API_BASE_URL}/livraisons`, { headers, params });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération des livraisons');
    }
}

export default {
    getLivraison,
    AddLivraison,
    updateLivraison,
    deleteLivraison
};


