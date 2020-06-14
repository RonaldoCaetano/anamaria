import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RouteSelection from './pages/RouteSelection'
import Map from './pages/Map'

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
				<AppStack.Screen name="RouteSelection" component={RouteSelection} />
                <AppStack.Screen name="Map" component={Map} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default Routes