import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RouteSelection from './pages/RouteSelection'
import Map from './pages/Map'
import Login from './pages/Login'
import Cadastrar from './pages/Cadastro'
import EsquecerSenha from './pages/EsquecerSenha'
import ListaJornadas from './pages/ListaJornadas'
import PontosParadas from './pages/ListaPontosParadas'
import IOSIcon from 'react-native-vector-icons/Ionicons'
import SideBarMenu from './components/SideMenu'

const AppStack = createStackNavigator()

const Routes = () => {
	return (
		<NavigationContainer>
			<AppStack.Navigator
				headerMode="screen"
				screenOptions={{
					cardStyle: {
						backgroundColor: '#f0f0f5',
					},
					header: ({ navigation, previous, scene }) => {
						return (
							<View
								style={{
									marginTop: 30,
									width: '100%',
									paddingLeft: 10,
									backgroundColor: '#ffa608',
									display: scene.route.name === 'Login' ? 'none' : 'flex',
								}}
							>
								<TouchableOpacity
									onPress={() =>
										previous ? navigation.goBack() : navigation.navigate('SideBarMenu')
									}
								>
									{previous ? (
										<IOSIcon name="ios-close" size={40} />
									) : (
										<IOSIcon name="ios-menu" size={40} />
									)}
								</TouchableOpacity>
							</View>
						)
					},
				}}
			>
				<AppStack.Screen name="Login" component={Login} />
				<AppStack.Screen name="Cadastro" component={Cadastrar} />
				<AppStack.Screen name="EsquecerSenha" component={EsquecerSenha} />
				<AppStack.Screen name="Jornadas" component={ListaJornadas} />
				<AppStack.Screen name="PontosParadas" component={PontosParadas} />
				<AppStack.Screen name="RouteSelection" component={RouteSelection} />
				<AppStack.Screen name="Map" component={Map} />
				<AppStack.Screen name="SideBarMenu" component={SideBarMenu} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
