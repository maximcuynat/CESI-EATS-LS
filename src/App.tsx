import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './navigation/AppNavigator';  // À adapter selon votre configuration de navigation
import store from './store/store';  // À adapter selon votre configuration Redux

const App = () => {
    return (
        <ReduxProvider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </ReduxProvider>
    );
};

export default App;
