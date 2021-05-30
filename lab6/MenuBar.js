//BSCS 3-3
//Chavez, Hanna Nicole
//Manzano, All Jhane
//Nogot, Jonvic
//Villanueva, Pauline

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const MenuBar = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FontAwesome5 name="cat" size={80}  color="#005959" />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    resizeMode: 'center',
    width: 100,
    height: 30,
    borderRadius: 200 / 2,
    alignSelf: 'center',
    padding: 10,
    marginVertical: 50
  },
});

export default MenuBar;
