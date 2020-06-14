import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, Text, View, TouchableOpacity , Image} from 'react-native'

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
                        <Text style={styles.navItemText}>Sair</Text>
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
                    <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Recompensas')}>
                        <Text style={styles.navItemText}>Listar Recompensas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('PostosGasolina')}>
                        <Text style={styles.navItemText}>Listar Postos de Gasolina</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Perfil')}>
                        <Text style={styles.navItemText}>Meu Perfil</Text>
                    </TouchableOpacity>
				</View>
			</ScrollView>
			<View style={styles.footerContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={styles.logotipotruck} source={require('../../../assets/minitruck.png')} />
            <Image style={styles.logotipo} source={require('../../../assets/logotipo.png')} />
            </View>
                
			</View>
		</View>
	)
}

export default SideMenu
