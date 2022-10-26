import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Help from './src/navigators/Drawer/Help';
import LogOut from './src/navigators/Drawer/LogOut';
import Home from './src/navigators/BottomTab/Home';
import Profile from './src/navigators/BottomTab/Profile';

import Favourite from './src/navigators/Drawer/Favourite';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerNav" component={DrawerNav} />

      <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
    </Stack.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="User" component={BottomTabNav} />
      <Drawer.Screen name="Favourite" component={Favourite} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="LogOut" component={LogOut} />
    </Drawer.Navigator>
  );
}

function BottomTabNav() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontSize: 13},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon1 name="home" size={24} color="blue" />
            ) : (
              <Icon1 name="home-outline" size={24} color="grey" />
            ),
        }}
      />
   
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontSize: 13},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon1 name="settings" size={24} color="blue" />
            ) : (
              <Icon1 name="settings-outline" size={24} color="grey" />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
