import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import styles from './styles'

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.logotipo} source={require('../../../assets/alimentacao.png')} />

			<Text style={styles.esquecerHeaderText}>Agora é hora de almoçar!</Text>
			<Text style={styles.esquecerText}>
				{' '}
				Alimentos leves e naturais são as melhores escolhas para uma viagem tranqüila. Que tal escolher essa
				sugestão do Ponto de parada:
			</Text>

			<TouchableOpacity>
				<View style={styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Image style={styles.prato} source={require('../../../assets/frango.png')} />
						<Text style={styles.esquecerHeaderText}>Frango Grelhado</Text>
					</View>

					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={styles.esquecerText}>Frango, Arroz, Salada, Brócolis e Batatas</Text>
					</View>
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.esquecerBtn}>
				<Text style={styles.esquecerText}>OK</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.esquecerText}>Ignorar aviso</Text>
			</TouchableOpacity>
		</View>
	)
}
