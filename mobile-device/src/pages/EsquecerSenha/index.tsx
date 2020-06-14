import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import styles from './styles'

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/logotipo.png')} />

			<Text style={styles.esquecerHeaderText}>Recupere sua senha!</Text>

			<View style={styles.inputView}>
				<TextInput style={styles.inputText} placeholder="Email..." placeholderTextColor="#FFF" />
			</View>
			<TouchableOpacity style={styles.esquecerBtn}>
				<Text style={styles.esquecerText}>RECUPERAR</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.esquecerText}>Já tenho Login!</Text>
			</TouchableOpacity>
		</View>
	)
}
