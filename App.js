import * as React from 'react';
import { Text, View } from 'react-native';

import HomeScreen from './app/screens/HomeScreen';
import NerdModeScreen from './app/screens/NerdModeScreen';
import colors from './app/config/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from '@material-ui/core/Icon';

function HomeScreenTab() {
  return (
    <HomeScreen></HomeScreen>
  );
}

function NerdModeScreenTab() {
  return (
    <NerdModeScreen></NerdModeScreen>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={{color:"red"}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-home'
                : 'md-home';
            } else if (route.name === 'Nerd Mode') {
              iconName = focused ? 'md-code' : 'md-code';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.primary,
          inactiveTintColor: "#858585",
          style: {
            position: 'absolute',
            height: 70,
            paddingVertical: 5,
            backgroundColor: "#fff",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
          labelStyle: {
            fontSize: 12,
            lineHeight: 20,
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeScreenTab} />
        <Tab.Screen name="Nerd Mode" component={NerdModeScreenTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}