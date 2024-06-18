// font.tsx
import { useFonts } from 'expo-font';

export const loadFonts = async () => {
    await useFonts({
        'Lemon-Regular': require('../../assets/font/Lemon/Lemon-Regular.ttf'),
    });
};