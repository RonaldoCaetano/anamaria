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
					<View style={styles.cardamarelo}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerHeaderText}>15/06/2020</Text>
							<TouchableOpacity style={styles.buttonEmAndamento}>
								<Text style={styles.text}>EM ANDAMENTO</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>De: Itatiba -SP</Text>
							<Text style={styles.esquecerText}>Duração: 2d 10h</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Para: Teresina-PI</Text>
							<Text style={styles.esquecerText}>Qtde Paradas: 8</Text>
						</View>

						<View>
							<Text style={styles.esquecerText}>Valor da Viagem: R$ 518,00</Text>
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.cardverde}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerHeaderText}>19/06/2020</Text>
							<TouchableOpacity style={styles.buttonInicio}>
								<Text style={styles.text}>INCIAR ROTA</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>De: Teresina - PI</Text>
							<Text style={styles.esquecerText}>Duração: 2d 5h</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Para: Belém-PA</Text>
							<Text style={styles.esquecerText}>Qtde Paradas: 6</Text>
						</View>

						<View>
							<Text style={styles.esquecerText}>Valor da Viagem: R$ 434,38</Text>
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.cardamarelo}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerHeaderText}>22/06/2020</Text>
							<TouchableOpacity style={styles.buttonInicio}>
								<Text style={styles.text}>INCIAR ROTA</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>De: Belém -PA</Text>
							<Text style={styles.esquecerText}>Duração: 3d 18h</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Para: Itatiba-SP</Text>
							<Text style={styles.esquecerText}>Qtde Paradas: 13</Text>
						</View>

						<View>
							<Text style={styles.esquecerText}>Valor da Viagem: R$ 618,10</Text>
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerHeaderText}>10/06/2020</Text>
							<TouchableOpacity style={styles.buttonFinalizada}>
								<Text style={styles.text}>FINALIZADA</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>De: Atibaia -SP</Text>
							<Text style={styles.esquecerText}>Duração: 1d 10h</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Para: Itatiba-SP</Text>
							<Text style={styles.esquecerText}>Qtde Paradas: 1</Text>
						</View>

						<View>
							<Text style={styles.esquecerText}>Valor da Viagem: R$ 35,00</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}
