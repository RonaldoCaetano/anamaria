import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'

import MapView from 'react-native-maps'
import styles from './styles'

const MapComponent = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const routeParams: any = route.params

    if (!routeParams.locationForMap) {
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
					latitude: routeParams.locationForMap.latitudeFrom,
					longitude: routeParams.locationForMap.longitudeFrom,
					latitudeDelta: 0.030,
					longitudeDelta: 0.030,
				}}
			/>

			<RectButton style={styles.button} onPress={() => console.log('clicked')}>
				<Text style={styles.buttonText}>SOS</Text>
			</RectButton>
		</View>
	)
}

export default MapComponent
