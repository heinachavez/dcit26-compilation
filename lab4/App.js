//BSCS 3-3
//Chavez, Hanna Nicole
//Manzano, All Jhane
//Nogot, Jonvic
//Villanueva, Pauline


import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Home from './screens/Home';
import About from './screens/About';
import Profile from './screens/Profile';
import MenuBar from './MenuBar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <View style={{ width: 25, height: 25, marginLeft: 5 }}>
          <FontAwesome5 name="hamburger" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#38ADAE',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#38ADAE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#5F9EA0',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <MenuBar {...props} />}>
        <Drawer.Screen
          name="Home"
          component={secondScreenStack}
          options={{
            drawerIcon: (config) => (
              <FontAwesome5 name="home" color="#008080" size={24}></FontAwesome5>
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={firstScreenStack}
          options={{
            drawerIcon: (config) => (
              <AntDesign
                size={24}
                color="#008080"
                name="infocirlce"></AntDesign>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
