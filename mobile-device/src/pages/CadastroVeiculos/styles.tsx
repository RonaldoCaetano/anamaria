import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logotipo: {
        width: 100,
        height: 100,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    cadastrarBtn: {
        width: "80%",
        backgroundColor: "#ffa608",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },
    salvarBtn: {
        width: "80%",
        backgroundColor: "#2c7f07",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },
    cadastrarText: {
        color: "white"
    },
    cadastrarHeaderText: {
        color: "white",
        fontSize: 30, 
        margin:5 
    }
})