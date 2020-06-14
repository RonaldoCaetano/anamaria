import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerTitle: {
		fontSize: 32,
		marginBottom: 20,
	},
	useLocationContainer: {
		position: 'relative',
		width: '90%',
	},
	useLocationButton: {
		width: 200,
		position: 'relative',
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
	buttonText: {
		flex: 1,
		justifyContent: 'center',
		textAlign: 'center',
		color: '#FFF',
		fontSize: 16,
	},
	input: {
		height: 60,
		backgroundColor: '#FFF',
		borderRadius: 10,
		marginBottom: 8,
		paddingHorizontal: 24,
		fontSize: 16,
		width: '90%',
	},
})
