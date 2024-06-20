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

export const getTypesArticles = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/inventaire/typeArticles`, { headers : getAuthHeader() });
        return response.data.typeArticles;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération des types d\'articles');
    }
}

export const AddTypeArticle = async (type : string) => {
    try {
        const body = {
            type : type
        };
        const response = await axios.post(`${API_BASE_URL}/inventaire/typeArticle`, { ...body }, { headers : getAuthHeader() });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la création du type d\'article');
    }
}

export const UpdateTypeArticle = async (id_type_article : string, type : string) => {
    try {
        const body = {
            ...(id_type_article && { id_type_article }),
            ...(type && { type }),
        };
        const response = await axios.put(`${API_BASE_URL}/inventaire/typeArticle`, body, { headers : getAuthHeader() });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la modification du type d\'article');
    }
}

export const deleteTypeArticle = async (id_type_article : string) => {
    try {
        const body = {
            id_type_article : id_type_article
        };
        const response = await axios.delete(`${API_BASE_URL}/inventaire/typeArticle`, { data : body, headers : getAuthHeader() }); // A tester c chelou
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la suppression du type d\'article');
    }
}

export default { getTypesArticles, AddTypeArticle, UpdateTypeArticle, deleteTypeArticle };