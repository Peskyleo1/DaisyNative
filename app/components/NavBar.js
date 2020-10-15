import * as React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function NavBar(props) {
  return (
    <NavigationContainer style={{color:"red"}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#6200EE",
          inactiveTintColor: "#858585",
          style: {
            height: 70,
            paddingVertical: 5,
            backgroundColor: "#000",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
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
  )
}

export default NavBar;