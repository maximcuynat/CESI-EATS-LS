import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';

// Api
import { getRestaurateurMenus } from '../../api/restaurateur';

// Components
import DispMenu from '../../components/DispMenu';
import Ionicons from '@expo/vector-icons/Ionicons';

interface ProfileScreenProps {
  route: any;
  navigation: any;
}

const Profile: React.FC<ProfileScreenProps> = ({ route, navigation }) => {

  // ================================================================================================

  return (<></>);

};


const styles = StyleSheet.create({
});


export default Profile;