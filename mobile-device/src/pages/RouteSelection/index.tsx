import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const RouteSelection = () => {
	const [initialLocation, setInitialLocation] = useState<string>('')
	const [destination, setDestination] = useState<string>('')
	const [initialLocationForMap, setInitialLocationForMap] = useState<LocationForMap>()
	const [loading, setLoading] = useState<boolean>(false)
	const key = 'AIzaSyBwJpOTDp1D6GOSGdGTATiCSN84gFEzuJE'
	const navigation = useNavigation()

	function defineInitialPosition() {
		setLoading(true)
		fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${initialLocation}&sensor=false&key=${key}`)
			.then((res) => res.json())
			.then((locationData: GoogleAPIResponse) => {
				if (locationData.results.length) {
					setInitialLocation(locationData.results[0].formatted_address)

					const {
						geometry: {
							location: { lat, lng },
						},
					} = locationData.results[0]

					setInitialLocationForMap({ latitudeFrom: lat, longitudeFrom: lng })

					setLoading(false)
				} else {
					Alert.alert('Não encontramos o endereço')
				}
			})
	}

	function defineDestination() {
		fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&sensor=false&key=${key}`)
			.then((res) => res.json())
			.then((locationData: GoogleAPIResponse) => {
				if (locationData.results.length) {
					setDestination(locationData.results[0].formatted_address)
					const {
						geometry: {
							location: { lat, lng },
						},
					} = locationData.results[0]

					navigation.navigate('Map', { ...initialLocationForMap, latitudeTo: lat, longitudeTo: lng })
				} else {
					Alert.alert('Não encontramos o endereço')
				}
			})
	}

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<View style={styles.container}>
				<Text style={styles.containerTitle}>Configure sua rota</Text>
				<TextInput
					style={styles.input}
					value={initialLocation}
					placeholder="Ponto de partida"
					autoCorrect={true}
					onChangeText={setInitialLocation}
					onBlur={defineInitialPosition}
				/>
				<TextInput
					style={styles.input}
					value={destination}
					placeholder="Destino"
					autoCorrect={true}
					onChangeText={setDestination}
					enabled={loading ? false : true}
				/>
				<RectButton
					enabled={loading ? false : true}
					style={[styles.confirmButton, styles.button]}
					onPress={defineDestination}
				>
					<Text style={styles.buttonText}>Confirmar percurso</Text>
				</RectButton>
			</View>
		</KeyboardAvoidingView>
	)
}

export default RouteSelection
