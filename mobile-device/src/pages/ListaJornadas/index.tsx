import React from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function App() {
    const navigation = useNavigation()
    
	return (
		<ScrollView style={styles.scroll}>
			<View style={styles.container}>
				<Text style={styles.esquecerHeaderText}>Suas Jornadas!</Text>
				<RectButton style={styles.novaJornada} onPress={() => navigation.navigate('RouteSelection')}>
					<Text style={styles.text}>NOVA JORNADA</Text>
				</RectButton>

				<TouchableOpacity>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerHeaderText}>15/06/2020</Text>
							<TouchableOpacity style={styles.buttonEmAndamento}>
								<Text style={styles.text}>EM ANDAMENTO</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>De: Itatiba -SP</Text>
							<Text style={styles.esquecerText}>Duração: 3d 10h</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Para: Belém-PA</Text>
							<Text style={styles.esquecerText}>Qtde Paradas: 10</Text>
						</View>

						<View>
							<Text style={styles.esquecerText}>Valor da Viagem: R$ 10,00</Text>
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerHeaderText}>15/06/2020</Text>
							<TouchableOpacity style={styles.buttonInicio}>
								<Text style={styles.text}>INCIAR ROTA</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>De: Itatiba -SP</Text>
							<Text style={styles.esquecerText}>Duração: 3d 10h</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Para: Belém-PA</Text>
							<Text style={styles.esquecerText}>Qtde Paradas: 10</Text>
						</View>

						<View>
							<Text style={styles.esquecerText}>Valor da Viagem: R$ 10,00</Text>
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerHeaderText}>15/06/2020</Text>
							<TouchableOpacity style={styles.buttonInicio}>
								<Text style={styles.text}>INCIAR ROTA</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>De: Itatiba -SP</Text>
							<Text style={styles.esquecerText}>Duração: 3d 10h</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Para: Belém-PA</Text>
							<Text style={styles.esquecerText}>Qtde Paradas: 10</Text>
						</View>

						<View>
							<Text style={styles.esquecerText}>Valor da Viagem: R$ 10,00</Text>
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerHeaderText}>12/06/2020</Text>
							<TouchableOpacity style={styles.buttonFinalizada}>
								<Text style={styles.text}>FINALIZADA</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>De: Itatiba -SP</Text>
							<Text style={styles.esquecerText}>Duração: 3d 10h</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Para: Belém-PA</Text>
							<Text style={styles.esquecerText}>Qtde Paradas: 10</Text>
						</View>

						<View>
							<Text style={styles.esquecerText}>Valor da Viagem: R$ 10,00</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}
