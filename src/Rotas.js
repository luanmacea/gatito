import {} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Servicos from './telas/Servicos/Index'
import Carrinho from './telas/Carrinho/Index'

import { cores } from './estilos'

const Tab = createBottomTabNavigator()

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
          activeTintColor: cores.roxo,
          inactiveTintColor: cores.escuro,
          activeBackgroundColor: cores.roxo,
          inactiveBackgroundColor: cores.laranja,
          style: {
            height: 60
          },
          labelStyle: {
            width: '100%',
            flex: 1,
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: cores.laranja
          },
          // keyboardHidesTabBar: true,
        }}>
        <Tab.Screen name="Servicos" component={Servicos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}