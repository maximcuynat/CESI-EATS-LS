import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { askAsync } from 'expo-permissions'; // Import askAsync from expo-permissions
import * as MediaLibrary from 'expo-media-library';

const ImagePickerComp: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {

    // Demander la permission d'accès à la galerie
    const { status } = await askAsync(MediaLibrary.MEDIA_LIBRARY); // askAsync from expo-permissions

    if (status !== 'granted') {
      alert('Permission refusée');
      return;
    }

    // Lancer le sélecteur d'images
    let result: ImagePicker.ImagePickerResult | undefined = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default ImagePickerComp;
