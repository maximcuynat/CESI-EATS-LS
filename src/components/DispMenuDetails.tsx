import React from "react";
import { StyleSheet } from "react-native";
import TextView from "./Text";
import ViewDisplay from "./Display";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

interface DispMenuDetailsProps {
    menuDetails: {
        name: string;
        articlePossible: string[];
        prix_supplementaire: Float[];
        quantiteItem: number;
    };
}

const DispMenuDetails: React.FC<DispMenuDetailsProps> = ({ menuDetails }) => {
    const [selectedArticles, setSelectedArticles] = useState(
    Array(menuDetails.quantiteItem).fill(menuDetails.articlePossible[0])
    );

    const handleValueChange = (index: number, itemValue: string) => {
    const newSelectedArticles = [...selectedArticles];
    newSelectedArticles[index] = itemValue;
    setSelectedArticles(newSelectedArticles);
    };

    return (
        <ViewDisplay type="card" style={styles.cardContent}>
            <TextView type="title" style={styles.textContainer}>{menuDetails.quantiteItem} x {menuDetails.name}</TextView>
            <ViewDisplay type="card">
                {selectedArticles.map((selectedArticle, index) => (
                <Picker
                    key={index}
                    selectedValue={selectedArticle}
                    onValueChange={(itemValue) => handleValueChange(index, itemValue)}
                    style={styles.picker}
                >
                    {menuDetails.articlePossible.map((item, itemIndex) => (
                    <Picker.Item
                        key={itemIndex}
                        label={menuDetails.prix_supplementaire[itemIndex] === 0 
                        ? item
                        : `${item}   +${menuDetails.prix_supplementaire[itemIndex]} €`} 
                        value={item}
                    />
                    ))}
                </Picker>
                ))}
            </ViewDisplay>
        </ViewDisplay>
    );
  };

const styles = StyleSheet.create({
card: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#ffffff",
    borderWidth: 1, // Set border width
    borderColor: "#ffffff", // Set border color to match the mockup
    shadowColor: "#000", // Add shadow for better look
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
},
cardContent: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 0,
},
textContainer: {
    marginRight: 15,
    textAlign: "left",
},
title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2d2d2d",
    marginBottom: 5,
},
picker: {
    height: 50,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
},
});

export default DispMenuDetails;