import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'

const SideMenu = () => {
    const navigation = useNavigation()
    
    function navigateToScreen(route: string) {
		navigation.navigate(route)
	}

	return (
		<View style={styles.container}>
			<ScrollView>
				<View>
                    <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Login')}>
                        <Text style={styles.navItemText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Jornadas')}>
                        <Text style={styles.navItemText}>Jornadas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('PontosParadas')}>
                        <Text style={styles.navItemText}>PontosParadas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('RouteSelection')}>
                        <Text style={styles.navItemText}>Definir Rotas</Text>
                    </TouchableOpacity>
				</View>
			</ScrollView>
			<View style={styles.footerContainer}>
				<Text>Ana Maria</Text>
			</View>
		</View>
	)
}

export default SideMenu
