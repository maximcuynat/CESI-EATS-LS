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

export const AddPaiement = async (id_type_paiement? : string) => {
    try {
        const body = {
            ...(id_type_paiement && { id_type_paiement }),
        };
        const response = await axios.post(`${API_BASE_URL}/paiements/Paiements`, { ...body }, { headers : getAuthHeader() });
        return response.data;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}