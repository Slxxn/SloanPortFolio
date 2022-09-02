import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './Portfolio/Menu';
import { styles } from './Portfolio/Menu/theme/styles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName='First' screenOptions={{headerShown:true}}>
          <Stack.Screen name="Menu" component={Menu}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App