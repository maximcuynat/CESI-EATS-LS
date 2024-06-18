import axios from 'axios';

// Fonction pour récupérer les menus en fonction de l'utilisateur connecté
export const getMenuByUser = async (userId: string) => {
  try {
    const response = await axios.get(`/api/menus?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des menus :', error);
    throw error;
  }
};