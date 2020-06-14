import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import styles from './styles'

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/logotipo.png')} />

			<Text style={styles.cadastrarHeaderText}>Venha viajar com a gente!</Text>

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
			<View style={styles.inputView}>
				<TextInput
					secureTextEntry
					style={styles.inputText}
					placeholder="Confirmar Senha..."
					placeholderTextColor="#FFF"
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput style={styles.inputText} placeholder="Email..." placeholderTextColor="#FFF" />
			</View>
			<View style={styles.inputView}>
				<TextInput style={styles.inputText} placeholder="Confirmar Email..." placeholderTextColor="#FFF" />
			</View>
			<TouchableOpacity style={styles.cadastrarBtn}>
				<Text style={styles.cadastrarText}>CADASTRAR</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.cadastrarText}>Já tenho Login!</Text>
			</TouchableOpacity>
		</View>
	)
}
