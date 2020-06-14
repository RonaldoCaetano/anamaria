import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function App() {
	const navigation = useNavigation()
	return (
		<ScrollView style={styles.scroll}>
			<View style={styles.container}>
				<Text style={styles.esquecerHeaderText}>Pontos de Parada</Text>
				<TouchableOpacity style={styles.novaJornada}>
					<Text style={styles.text}>PESQUISAR</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('PontosDeParada')}>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Image style={styles.logotipo} source={require('../../../assets/pontosdeparada.png')} />
							<Text style={styles.esquecerHeaderText}>CCR - STOP 1</Text>
							<TouchableOpacity
								style={styles.buttonInicio}
								onPress={() => navigation.navigate('Avaliacao')}
							>
								<Text style={styles.text}>PLUS</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Cidade: Barueri -SP</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Rod. Pres. Castello Branco, KM 24</Text>
							<Text style={styles.esquecerText}>Aberto</Text>
						</View>

						<View>
							<Image style={styles.estrelas} source={require('../../../assets/5estrelas.png')} />
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Image style={styles.logotipo} source={require('../../../assets/pontosdeparada.png')} />
							<Text style={styles.esquecerHeaderText}>CCR - STOP 2</Text>
							<TouchableOpacity style={styles.buttonInicio}>
								<Text style={styles.text}>PLUS</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Cidade: Barueri -SP</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Rod. Pres. Castello Branco, KM 24</Text>
							<Text style={styles.esquecerText}>Fechado</Text>
						</View>

						<View>
							<Image style={styles.estrelas} source={require('../../../assets/5estrelas.png')} />
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Image style={styles.logotipo} source={require('../../../assets/pontosdeparada.png')} />
							<Text style={styles.esquecerHeaderText}>CCR - STOP 3</Text>
							<TouchableOpacity style={styles.buttonFinalizada}>
								<Text style={styles.text}>NORMAL</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Cidade: Barueri -SP</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={styles.esquecerText}>Rod. Pres. Castello Branco, KM 24</Text>
							<Text style={styles.esquecerText}>Fechado</Text>
						</View>

						<View>
							<Image style={styles.estrelas} source={require('../../../assets/5estrelas.png')} />
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}
