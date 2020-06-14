import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RouteSelection from './pages/RouteSelection'
import Map from './pages/Map'
import Login from './pages/Login'
import Cadastrar from './pages/Cadastro'
import EsquecerSenha from './pages/EsquecerSenha'

const AppStack = createStackNavigator()

const Routes = () => {
	return (
		<NavigationContainer>
			<AppStack.Navigator
				headerMode="none"
				screenOptions={{
					cardStyle: {
						backgroundColor: '#f0f0f5',
					},
				}}
			>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Cadastro" component={Cadastrar} />
                <AppStack.Screen name="Cadastro" component={EsquecerSenha} />
				<AppStack.Screen name="RouteSelection" component={RouteSelection} />
                <AppStack.Screen name="Map" component={Map} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default Routes