import { createAppContainer } from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './SearchScreen';
import MainScreen from "./MainScreen";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'



const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Search' component={SearchScreen} options={{title:'Search Screen'}} />
     
      
        <Stack.Screen name='Home' component={MainScreen} options={{title:'CryptoTracker'}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator;
// const navigator = createStackNavigator(
//     {
//         Main:MainScreen,
//         Search : SearchScreen

//     },
//     {
//       initialRouteName: 'Main',
//       defaultNavigationOptions:{
//         title: 'Crypto Tracker'
//     }
// );

// export default AppContainer = createAppContainer(navigator);