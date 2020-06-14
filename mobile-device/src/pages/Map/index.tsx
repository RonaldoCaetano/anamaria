import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import styles from './styles'

const MapComponent = () => {
	const navigation = useNavigation()
	const route = useRoute()
	const routeParams: any = route.params

	if (!routeParams.locationForMap) {
		return <></>
    }
    
    console.log(routeParams)

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
					latitude: routeParams.locationForMap.latitudeFrom,
					longitude: routeParams.locationForMap.longitudeFrom,
					latitudeDelta: 0.03,
					longitudeDelta: 0.03,
				}}
			>
				<MapViewDirections
					origin={{
						latitude: routeParams.locationForMap.latitudeFrom,
						longitude: routeParams.locationForMap.longitudeFrom,
                    }}
                    destination={{
                        latitude: routeParams.locationForMap.latitudeTo,
						longitude: routeParams.locationForMap.longitudeTo,
                    }}
                    apikey="AIzaSyBwJpOTDp1D6GOSGdGTATiCSN84gFEzuJE"
                    strokeWidth={3}
                    strokeColor="hotpink"
				/>
			</MapView>

			<RectButton style={styles.button} onPress={() => console.log('clicked')}>
				<Text style={styles.buttonText}>SOS</Text>
			</RectButton>
		</View>
	)
}

export default MapComponent
