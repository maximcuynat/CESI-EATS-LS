import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';  // Assurez-vous d'adapter le chemin selon votre structure

const MainApp = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
};

export default MainApp;
