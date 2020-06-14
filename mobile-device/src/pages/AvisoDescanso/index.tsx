import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import styles from './styles'

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/descansoaviso.png')} />

			<Text style={styles.esquecerHeaderText}>Tá na hora de descansar!</Text>
            <Text style={styles.esquecerText}>Você sabia? De acordo com a CLT o caminhoneiro deve fazer um intervalo de 30min a cada 6 horas de direção, sendo proibido dirigir por mais de 5 horas e meia sem nenhuma pausa.</Text>

			<TouchableOpacity style={styles.esquecerBtn}>
				<Text style={styles.esquecerText}>OK</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.esquecerText}>Ignorar aviso</Text>
			</TouchableOpacity>
		</View>
	)
}
