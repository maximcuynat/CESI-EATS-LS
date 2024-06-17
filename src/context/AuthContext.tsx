import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, logout } from '../store/slices/userSlice';
import { setToken, removeToken } from '../utils/authUtils';
import { jwtDecode } from 'jwt-decode';

// Interface décrivant les propriétés du contexte d'authentification
interface AuthContextProps {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logoutUser: () => void;
}

// Création du contexte d'authentification avec une valeur initiale indéfinie
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Interface des propriétés du composant AuthProvider
interface AuthProviderProps {
    children: ReactNode;
}

// Composant fournisseur d'authentification
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const dispatch = useDispatch();

    // Fonction de connexion utilisateur
    const login = (token: string) => {
        const user = jwtDecode<{ id: number, role: string, iat: number, exp: number }>(token);
        dispatch(setUser({ user, token, iat: user.iat, exp: user.exp }));
        setToken(token);
        setIsAuthenticated(true);
    };

    // Fonction de déconnexion utilisateur
    const logoutUser = () => {
        removeToken();
        dispatch(logout());
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
