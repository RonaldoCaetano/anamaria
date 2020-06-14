import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import api from './../../api'

import styles from './styles'

export default function App() {
	const navigation = useNavigation()
	const [email, setEmail] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    
    function setUserSession() {

        const userData = { email, telefone, qtde_milhas: 0 }

        api.post(`/user`, userData)
			.then(({ data }) => {
                if (data) {
                    AsyncStorage.setItem('userSession', JSON.stringify(userData))
                    navigation.navigate('Jornadas')
                } else {
                    Alert.alert('Houve um erro ao realizar o seu cadastro.')
                }
			})
			.catch(() => Alert.alert('Houve um erro ao realizar o seu cadastro.'))
    }

	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/logotipo.png')} />

			<Text style={styles.cadastrarHeaderText}>Venha viajar com a gente!</Text>

			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Email..."
					placeholderTextColor="#FFF"
					onChangeText={setEmail}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Telefone com DDD..."
					placeholderTextColor="#FFF"
					onChangeText={setTelefone}
				/>
			</View>
			<TouchableOpacity style={styles.cadastrarBtn} onPress={setUserSession}>
				<Text style={styles.cadastrarText}>CADASTRAR</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Text style={styles.cadastrarText}>Já tenho Login!</Text>
			</TouchableOpacity>
		</View>
	)
}
