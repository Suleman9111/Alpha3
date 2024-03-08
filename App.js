
import * as React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './frontend/Screens/HomeScreen';
import Chat from './frontend/Screens/Chat';
import Tabs from './frontend/Tabs/Tabs';
import Login from './frontend/Screens/Login';
import Message from './frontend/Screens/Message';
import Cart from './frontend/Screens/Cart';
import ProfileScreen from './frontend/Screens/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
        <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: true }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />








      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App