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

export const getCommandes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/commandes/Commandes`, {
            headers: getAuthHeader()
        });
        return response.data.commandes;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const getCommande = async (id: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/commandes/contenu_commande/${id}`, {
            headers: getAuthHeader()
        });
        return response.data.commande;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const AddCommande = async (id_paiement : string, montant : string, panier_articles : string, panier_menus : string ) => {
    try {
        const body = {
            id_paiement: id_paiement,
            montant: montant,
            panier_articles: [panier_articles],
            panier_menus: [panier_menus]
        };
        const response = await axios.post(`${API_BASE_URL}/commandes/Commandes`, { ...body }, { headers : getAuthHeader() });
        return response.data;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export default { getCommandes, getCommande, AddCommande };