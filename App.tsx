import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import home from './src/home';
import detail from './src/detail';
import linking from './src/linking';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="detail" component={detail} />
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
