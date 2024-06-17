import { ScrollView, StyleSheet } from 'react-native';
import ViewDisplay from './components/Display';
import DispMenuDetails from './components/DispMenuDetails';

const menuDetails = [
    {
        name: "Boisson",
        articlePossible: ["Fanta", "Ice Tea", "Coca", "Orangina"],
        prix_supplementaire: [0, 1.5, 0, 0],
        quantiteItem: 2,
    },
    {
        name: "Accompagnement",
        articlePossible: ["Frites", "Nuggets", "Onion Rings", "Salade"],
        prix_supplementaire: [0, 0, 1.5, 0],
        quantiteItem: 1,
    },
    {
        name: "Burger",
        articlePossible: ["Cheeseburger", "Hamburger", "Chickenburger", "Fishburger"],
        prix_supplementaire: [0, 0, 0, 0],
        quantiteItem: 3,
    }
];


const MainApp = () => {
    return (
        <ViewDisplay type="fill">
            <ScrollView>
                {menuDetails.map((menuDetail, index) => (
                    <DispMenuDetails key={index} menuDetails={menuDetail} />
                ))}
            </ScrollView>
        </ViewDisplay>
    );
};

export default MainApp;

