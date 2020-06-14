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
		height: 250,
    },
    prato: {
		width: 50,
		height: 50,
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
    card: {
        width: "95%",
        backgroundColor: "#465881",
        borderRadius: 15,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
})
