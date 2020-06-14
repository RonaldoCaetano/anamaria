import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import styles from './styles'

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/perfil.png')} />

			<Text style={styles.cadastrarHeaderText}>Seu Pefil</Text>

			<View style={styles.inputView}>
				<TextInput style={styles.inputText} placeholder="ID MILHAS" placeholderTextColor="#FFF" />
			</View>

			<View style={styles.inputView}>
				<TextInput style={styles.inputText} placeholder="Usuário" placeholderTextColor="#FFF" />
			</View>
			<View style={styles.inputView}>
				<TextInput secureTextEntry style={styles.inputText} placeholder="Senha" placeholderTextColor="#FFF" />
			</View>
			<View style={styles.inputView}>
				<TextInput style={styles.inputText} placeholder="Email" placeholderTextColor="#FFF" />
			</View>
			<View style={styles.inputView}>
				<TextInput style={styles.inputText} placeholder="Telefone" placeholderTextColor="#FFF" />
			</View>
			<TouchableOpacity style={styles.cadastrarBtn}>
				<Text style={styles.cadastrarText}>SALVAR</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.salvarBtn}>
				<Text style={styles.cadastrarText}>ADICIONAR VEÍCULO</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.cadastrarText}>Voltar</Text>
			</TouchableOpacity>
		</View>
	)
}
