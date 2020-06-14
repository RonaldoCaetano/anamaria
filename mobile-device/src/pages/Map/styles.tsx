import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mapContainer: {
        marginTop: 20,
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapComponent: {
        width: '90%',
        height: 500,
    },
    button: {
        backgroundColor: 'red',
		height: 60,
		flexDirection: 'row',
		borderRadius: 10,
		overflow: 'hidden',
		alignItems: 'center',
        marginTop: 20,
        width: '90%'
    },
    buttonText: {
        flex: 1,
		justifyContent: 'center',
		textAlign: 'center',
		color: '#FFF',
		fontSize: 16,
    },
    goBackButton: {
        marginBottom: 20
    }
})