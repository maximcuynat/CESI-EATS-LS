import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';  // Assurez-vous d'adapter le chemin selon votre structure

const MainApp = () => {
    return (
        <NavigationContainer>
            <AppNavigator />  {/* Votre navigation principale */}
        </NavigationContainer>
    );
};

export default MainApp;
