import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import styles from './styles'

const MapComponent = () => {
	const navigation = useNavigation()
	const route = useRoute()
	const routeParams: any = route.params

	if (!routeParams.latitudeTo) {
		return <></>
	}

	return (
		<View style={styles.mapContainer}>
			<View>
				<RectButton style={[styles.button, styles.goBackButton]} onPress={() => navigation.goBack()}>
					<Text style={styles.buttonText}>Voltar</Text>
				</RectButton>
			</View>

			<MapView
				style={styles.mapComponent}
				initialRegion={{
					latitude: routeParams.latitudeFrom,
					longitude: routeParams.longitudeFrom,
					latitudeDelta: 0.03,
					longitudeDelta: 0.03,
				}}
			>
				<Marker
					key="coordinate_a"
					coordinate={{ latitude: routeParams.latitudeFrom, longitude: routeParams.longitudeFrom }}
				/>
				<Marker
					key="coordinate_b"
					coordinate={{ latitude: routeParams.latitudeTo, longitude: routeParams.longitudeTo }}
				/>
				<MapViewDirections
					origin={{
						latitude: routeParams.latitudeFrom,
						longitude: routeParams.longitudeFrom,
                    }}
                    waypoints={[{latitude: -23.0127549, longitude: -46.8249054}]}
					destination={{
						latitude: routeParams.latitudeTo,
						longitude: routeParams.longitudeTo,
					}}
					apikey="YOUR_APY_KEY"
					strokeWidth={6}
                    strokeColor="red"
					onStart={(params) => {
						console.log('route started', params)
                    }}
                    onReady={(result ) => {
                        console.log(result)
                    }}
				/>
			</MapView>

			<RectButton style={styles.button} onPress={() => navigation.navigate('SOSNumbers', { state: "São Paulo" })}>
				<Text style={styles.buttonText}>SOS</Text>
			</RectButton>
		</View>
	)
}

export default MapComponent
