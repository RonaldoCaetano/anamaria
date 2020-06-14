import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';

import styles from './styles'

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/pontosdeparada.png')} />

			<Text style={styles.esquecerHeaderText}>Faça sua avaliação</Text>
			<Text style={styles.esquecerText}>POSTO CCR - STOP 1</Text>

			<AirbnbRating
				count={11}
				reviews={["Terrivel", "Péssimo", "Ruim", "Regular", "Bom", "Muito bom", "Ótimo", "Excelente", "Incrível", "Inacréditavel", "Melhor parada de todas"]}
				defaultRating={5}
				size={20}
			/>

			<View style={styles.inputView} >
				<TextInput
					style={styles.inputText}
					placeholder="Sugestões..."
					placeholderTextColor="#FFF" />
			</View>

			<TouchableOpacity style={styles.esquecerBtn}>
				<Text style={styles.esquecerText}>Enviar Avaliação</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.esquecerText}>Voltar</Text>
			</TouchableOpacity>

		</View>
	)
}
