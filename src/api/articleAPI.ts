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

export const getArticle = async (id_article : string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/inventaire/article/${id_article}`, { headers : getAuthHeader() });
        return response.data.article;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération de l\'article');
    }
};

export const AddArticle = async (id_restaurant : string, id_type_article : string, nom : string, prix_unitaire : string, vendable_unitairement : string) => {
    try {
        const body = {
            id_restaurant : id_restaurant,
            id_type_article : id_type_article,
            nom : nom,
            prix_unitaire : prix_unitaire,
            vendable_unitairement : vendable_unitairement
        };
        const response = await axios.post(`${API_BASE_URL}/inventaire/article`, { ...body }, { headers : getAuthHeader() });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la création de l\'article');
    }
}

export const updateArticle = async (id_article : string, id_type_article? : string, nom? : string, prix_unitaire? : string, vendable_unitairement? : string) => {
    try {
        const body = {
            ...(id_article && { id_article }),
            ...(id_type_article && { id_type_article }),
            ...(nom && { nom }),
            ...(prix_unitaire && { prix_unitaire }),
            ...(vendable_unitairement && { vendable_unitairement }),
        };
        const response = await axios.put(`${API_BASE_URL}/inventaire/article`, body, { headers : getAuthHeader() });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la modification de l\'article');
    }
}

export const deleteArticle = async (id_article : string) => {
    try {
        const body = {
            id_article : id_article
        };
        const response = await axios.delete(`${API_BASE_URL}/inventaire/article`, { headers : getAuthHeader(), data : body }); // A tester c chelou
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la suppression de l\'article');
    }
}

export const getArticles = async (id_restaurant : string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/inventaire/articles/${id_restaurant}`, { headers : getAuthHeader() });
        return response.data.articles;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération des articles');
    }
};

export default { getArticle, AddArticle, updateArticle, deleteArticle, getArticles };