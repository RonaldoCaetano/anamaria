import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import styles from './styles'

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/alongamento.png')} />

			<Text style={styles.esquecerHeaderText}>Que tal um alongamento?</Text>
            <Text style={styles.esquecerText}>Você sabia? O alongamento previne dores, evita cãibras, facilita o relaxamento muscular e reativa a circulação.</Text>

			<TouchableOpacity style={styles.esquecerBtn}>
				<Text style={styles.esquecerText}>OK</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.esquecerText}>Ignorar aviso</Text>
			</TouchableOpacity>
		</View>
	)
}
