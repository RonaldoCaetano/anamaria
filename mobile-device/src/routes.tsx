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
import Recompensas from './pages/ListaRecompensas'
import PostosGasolina from './pages/ListaPostosGasolina'
import Avaliacao from './pages/Avaliacao'
import AvisoAlimentacao from './pages/AvisoAlimentacao'
import AvisoAlongamento from './pages/AvisoAlongamento'
import AvisoDescanso from './pages/AvisoDescanso'
import CadastroVeiculos from './pages/CadastroVeiculos'
import CheckList from './pages/CheckList'
import Perfil from './pages/Perfil'
import PontosDeParada from './pages/PontodeParada'

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
					header: ({ navigation, scene }: any) => {
						const { name } = scene.route
						return (
							<View
								style={{
									marginTop: 35,
									width: '100%',
									paddingLeft: 10,
									backgroundColor: '#ffa608',
									display: name === 'Login' || name === 'Cadastro' ? 'none' : 'flex',
								}}
							>
								<TouchableOpacity>
									{name === 'SideBarMenu' ? (
										<IOSIcon name="ios-close" size={40} onPress={() => navigation.goBack()} />
									) : (
										<IOSIcon
											name="ios-menu"
											size={40}
											onPress={() => navigation.navigate('SideBarMenu')}
										/>
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
				<AppStack.Screen name="Recompensas" component={Recompensas} />
				<AppStack.Screen name="PostosGasolina" component={PostosGasolina} />
				<AppStack.Screen name="Avaliacao" component={Avaliacao} />
				<AppStack.Screen name="AvisoAlimentacao" component={AvisoAlimentacao} />
				<AppStack.Screen name="AvisoAlongamento" component={AvisoAlongamento} />
				<AppStack.Screen name="AvisoDescanso" component={AvisoDescanso} />
				<AppStack.Screen name="CadastroVeiculos" component={CadastroVeiculos} />
				<AppStack.Screen name="CheckList" component={CheckList} />
				<AppStack.Screen name="Perfil" component={Perfil} />
				<AppStack.Screen name="PontosDeParada" component={PontosDeParada} />
				<AppStack.Screen name="SideBarMenu" component={SideBarMenu} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
