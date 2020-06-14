import React from 'react'
import { StyleSheet, View, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
import Routes from './src/routes'

export default function App() {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
			<Routes />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 40,
		backgroundColor: '#fff',
	},
})
