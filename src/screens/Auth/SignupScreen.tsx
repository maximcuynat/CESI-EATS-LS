import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import TextView from '../../components/Text';
import ViewDisplay from '../../components/Display';
import TextInputView from '../../components/Input';

// Auth
import { useAuth } from '../../context/AuthContext';
import api from '../../api/authAPI';

export default function SignupScreen(){

	// Auth
	const { login } = useAuth();

	// Variables d'état
  const [pseudo, setPseudo] = useState("m.cuynat");
  const [pseudoErr, setPseudoErr] = useState("");

  const [email, setEmail] = useState("m.cuynat@gmail.com");
  const [emailErr, setEmailErr] = useState("");

  const [password, setPassword] = useState("mcuyntatpsw");
  const [passwordErr, setPasswordErr] = useState("");

  const [role, setRole] = useState("client");
  const [roleErr, serPasswordErr] = useState("");

	const [parrain, setParrain] = useState(Number);
	
	// Fonction de validation

	const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    let isValid = true;

    if (pseudo.length < 3) {
      setPseudoErr("Le pseudo doit contenir au moins 3 caractères");
      isValid = false;
    } else {
      setPseudoErr("");
    }

    if (email.length < 3) {
      setEmailErr("L'email doit contenir au moins 3 caractères");
      isValid = false;
    } else {
      setEmailErr("");
    }

    if (password.length < 3) {
      setPasswordErr("Le mot de passe doit contenir au moins 3 caractères");
      isValid = false;
    } else {
      setPasswordErr("");
    }

    if (isValid) {
			try{
				const response = await api.signup(pseudo, password, email, role, parrain);
				const data = response.data;
				console.log(data);
			} catch (error) {
				console.error(error);
			}
    }
  }

	return (
		<>
		</>
	);
}