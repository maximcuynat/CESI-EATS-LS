import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';  // Assurez-vous que le store Redux est configuré correctement
import { AuthProvider } from './src/context/AuthContext';  // Importez votre AuthProvider depuis le dossier src
import MainApp from './src/MainApp';  // Importez votre composant principal depuis le dossier src

import TextView from './src/components/Text';

const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <MainApp />
            </AuthProvider>
        </Provider>
    );
};

export default App;
