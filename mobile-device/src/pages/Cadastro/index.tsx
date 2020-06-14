import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function App() {
    const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/logotipo.png')} />

			<Text style={styles.cadastrarHeaderText}>Venha viajar com a gente!</Text>

			<View style={styles.inputView}>
				<TextInput style={styles.inputText} placeholder="Email..." placeholderTextColor="#FFF" />
			</View>
            <View style={styles.inputView}>
				<TextInput style={styles.inputText} placeholder="Telefone com DDD..." placeholderTextColor="#FFF" />
			</View>
			<TouchableOpacity style={styles.cadastrarBtn}>
				<Text style={styles.cadastrarText}>CADASTRAR</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Text style={styles.cadastrarText}>Já tenho Login!</Text>
			</TouchableOpacity>
		</View>
	)
}
