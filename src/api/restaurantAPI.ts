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

export const getRestaurant = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/utilisateur/restaurant`, { headers : getAuthHeader() });
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 400 && error.response?.data?.message === 'Restaurant not found') {
        return false;
      }
      throw new Error(error.response?.data?.message || 'Erreur lors de la récupération du restaurant');
    }
};

export const updateRestaurant = async (description? : string, path_image? : string, nom? : string, adresse_resto? : string) => {
    try {
        const body = {
            ...(description && { description }),
            ...(path_image && { path_image }),
            ...(nom && { nom }),
            ...(adresse_resto && { adresse_resto })
        };
        const response = await axios.put(`${API_BASE_URL}/utilisateur/restaurant`, body, { headers : getAuthHeader() });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la modification du restaurant');
    }
}

export const addRestaurant = async (nom: string, adresse_resto: string, description: string, path_image?: string) => {
    try {
        const body = {
            nom,
            adresse_resto,
            description,
            ...(path_image && { path_image })
        };
        const response = await axios.post(`${API_BASE_URL}/utilisateur/restaurant`, { ...body }, { headers : getAuthHeader() });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la création du restaurant');
    }
}

export const deleteRestaurant = async () => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/utilisateur/restaurant`,  { headers : getAuthHeader() });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la suppression du restaurant');
    }
}

export const getRestaurants = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/utilisateur/restaurants`,  { headers : getAuthHeader() });
        return response.data.restaurants;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération des restaurants');
    }
};

export default { getRestaurant, updateRestaurant, addRestaurant, deleteRestaurant, getRestaurants };