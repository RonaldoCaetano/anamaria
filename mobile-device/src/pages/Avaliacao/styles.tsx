import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#003f5c',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logotipo: {
		width: 150,
		height: 150,
	},
	inputView: {
		width: '80%',
		backgroundColor: '#465881',
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		marginTop: 10,
		justifyContent: 'center',
		padding: 20,
	},
	inputText: {
		height: 50,
		color: 'white',
	},
	esquecerBtn: {
		width: '80%',
		backgroundColor: '#ffa608',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		marginBottom: 10,
	},
	esquecerText: {
        color: 'white',
        margin: 10,
        textAlign: 'center',
	},
	esquecerHeaderText: {
		color: 'white',
		fontSize: 30,
		margin: 5,
	},
})
