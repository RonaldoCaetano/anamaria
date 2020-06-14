import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
import Routes from './src/routes'

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" backgroundColor="#ffa608" translucent />
			<Routes />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
