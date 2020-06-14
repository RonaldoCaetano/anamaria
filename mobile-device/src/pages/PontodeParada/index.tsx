import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function App() {

    const [phone, setPhone] = useState<string>('11997049551')
    const navigation = useNavigation()

    function handleWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${phone}&text=Olá tudo bem?`)
    }

	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/contato.png')} />

			<Text style={styles.esquecerHeaderText}>Contato</Text>
			<Text style={styles.esquecerText}>POSTO CCR - STOP 1</Text>

			<View style={styles.inputView} >
				<TextInput
                    style={styles.inputText}
                    defaultValue="11997049551"
                    value="11997049551"
                    placeholderTextColor="#FFF"
                    onChangeText={setPhone}
                />
			</View>

			<TouchableOpacity style={styles.esquecerBtn} onPress={handleWhatsapp}>
				<Text style={styles.esquecerText}>Enviar Mensagem</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Text style={styles.esquecerText}>Voltar</Text>
			</TouchableOpacity>

		</View>
	)
}
