import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#003f5c',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logotipo: {
		width: 250,
		height: 150,
	},
	inputView: {
		width: '80%',
		backgroundColor: '#465881',
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		padding: 20,
	},
	inputText: {
		height: 50,
        color: 'white',
        position: 'relative'
	},
	forgot: {
		color: 'white',
		fontSize: 11,
	},
	loginBtn: {
		width: '80%',
		backgroundColor: '#ffa608',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		marginBottom: 10,
	},
	loginText: {
		color: 'white',
    },
    confirmButton: {
		width: '90%',
	},
	button: {
		backgroundColor: 'green',
		height: 60,
		flexDirection: 'row',
		borderRadius: 10,
		overflow: 'hidden',
		alignItems: 'center',
		marginTop: 15,
	},
})
