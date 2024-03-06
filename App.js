import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './src/pages/home';
import Sobre from './src/pages/sobre';
// IMPORT STACK NAVIGATION
import { NavigationContainer, useNavigation } from '@react-navigation/native';7
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Criando uma instancia do STACK NAVIGATOR,
// isso nos permite utilizar comandos para definir a navegação da aplicação.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


 

