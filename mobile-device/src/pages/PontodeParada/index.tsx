import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function App() {
    const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/contato.png')} />

			<Text style={styles.esquecerHeaderText}>Contato</Text>
			<Text style={styles.esquecerText}>POSTO CCR - STOP 1</Text>

			<View style={styles.inputView} >
				<TextInput
					style={styles.inputText}
					value="+55 (11) 99999-99999"
					placeholderTextColor="#FFF" />
			</View>

			<TouchableOpacity style={styles.esquecerBtn}>
				<Text style={styles.esquecerText}>Enviar Mensagem</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('PontosParadas')}>
				<Text style={styles.esquecerText} >Voltar</Text>
			</TouchableOpacity>

		</View>
	)
}
