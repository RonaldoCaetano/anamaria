import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import api from './../../api'
import IOSIcon from 'react-native-vector-icons/Ionicons'

import styles from './styles'

export default function App() {
	const navigation = useNavigation()

	const [telefone, setTelefone] = useState<string>('')
    const [token, setToken] = useState<string>('')
    const [tokenTyped, setTokenTypes] = useState<string>('')

	function sendToken() {
		api.post(`/token`, { phone: telefone })
			.then(({ data }) => {
				setToken(data.token)
				Alert.alert('Um SMS foi enviado para o número informado contendo o código de acesso')
			})
			.catch((error) => console.log(error))
	}

	function verifyUser() {
		api.get(`/user/${telefone}`)
			.then(({ data }) => {
				if (data && data.length) {
					sendToken()
				} else {
					Alert.alert('Usuário não encontrado')
				}
			})
			.catch((error) => console.log(error))
    }
    
    function startUserSession() {
        // if (String(tokenTyped) === String(token)) {
            const userSession = {
                token,
                telefone
            }
            AsyncStorage.setItem('userSession', JSON.stringify(userSession))
            Alert.alert('Login Realizado com sucesso')
            navigation.navigate('Jornadas')
        // } else {
        //     Alert.alert('Código incorreto')
        // }
    }

	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/logotipo.png')} />
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Insira o seu telefone com o DDD..."
					placeholderTextColor="#FFF"
                    onChangeText={setTelefone}
				/>
                <IOSIcon style={{ position: 'absolute', right: 20 }} color="#fff" name="ios-arrow-round-forward" size={40} onPress={verifyUser}/>
			</View>
			{token !== '' && (
                <>
                    <View style={styles.inputView}>
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Insira o código recebido..."
                            placeholderTextColor="#FFF"
                            onChangeText={setTokenTypes}
                        />
                    </View>
                    <RectButton style={styles.loginBtn} onPress={startUserSession}>
                        <Text style={styles.loginText}>ENTRAR</Text>
                    </RectButton>
                </>
			)}
			<TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
				<Text style={styles.loginText}>Cadastrar</Text>
			</TouchableOpacity>
		</View>
	)
}
