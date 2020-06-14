import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function App() {
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/logotipo.png')} />
			<View style={styles.inputView}>
				<TextInput style={styles.inputText} placeholder="Usuário..." placeholderTextColor="#FFF" />
			</View>
			<View style={styles.inputView}>
				<TextInput
					secureTextEntry
					style={styles.inputText}
					placeholder="Senha..."
					placeholderTextColor="#FFF"
				/>
			</View>
			<TouchableOpacity>
				<Text style={styles.forgot}>Esqueceu a senha?</Text>
			</TouchableOpacity>
			<RectButton style={styles.loginBtn} onPress={() => navigation.navigate('Jornadas')}>
				<Text style={styles.loginText}>ENTRAR</Text>
			</RectButton>
            <TouchableOpacity>
				<Text style={styles.loginText}>Cadastrar</Text>
			</TouchableOpacity>
		</View>
	)
}
