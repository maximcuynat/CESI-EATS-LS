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

export const getMenu = async (id_menu : string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/inventaire/menu/${id_menu}`, { headers : getAuthHeader() });
        return response.data.menu;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération du menu');
    }
};

export const AddMenu = async (id_restaurant : string, nom : string, prix_menu : string, description : string, path_image : string, articles : string ) => {
    try {
        const body = {
            id_restaurant : id_restaurant,
            nom : nom,
            prix_menu : prix_menu,
            description : description,
            path_image : path_image,
            articles : [articles]
        };
        const response = await axios.post(`${API_BASE_URL}/inventaire/menu`, { ...body }, { headers : getAuthHeader() });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la création du menu');
    }
}

export const UpdateMenu = async (id_menu : string, nom? : string, prix_menu? : string, description? : string, path_image? : string, articles? : string) => {
    try {
        const body = {
            ...(id_menu && { id_menu }),
            ...(nom && { nom }),
            ...(prix_menu && { prix_menu }),
            ...(description && { description }),
            ...(path_image && { path_image }),
            ...(articles && { articles }),
        };
        const response = await axios.put(`${API_BASE_URL}/inventaire/menu`, body, { headers : getAuthHeader() });
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la modification du menu');
    }
}

export const deleteMenu = async (id_menu : string) => {
    try {
        const body = {
            id_menu : id_menu
        };
        const response = await axios.delete(`${API_BASE_URL}/inventaire/menu`, { headers : getAuthHeader(), data : body }); // A tester c chelou
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la suppression du menu');
    }
}

export const getMenus = async (id_restaurant : string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/inventaire/menus/${id_restaurant}`, { headers : getAuthHeader() });
        console.log("Menus: ", response.data);
        return response.data.menus;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération des menus');
    }
}

export default { getMenu, AddMenu, UpdateMenu, deleteMenu, getMenus };