//BSCS 3-3
//Chavez, Hanna Nicole
//Manzano, All Jhane
//Nogot, Jonvic
//Villanueva, Pauline

import React, {useState} from 'react';
import {View, Button, StyleSheet, Image, Text, SafeAreaView, ScrollView} from 'react-native';

import SampleModal from './components/SampleModal';

export default function App(){
  const [modalOn, setmodalOn] = useState(false);

  return(
    
    <View style = {styles.container}>
          <Text style= {styles.press}>
            WHAT IF WE EXIST?
          </Text>
          <Image style = {styles.img} source={{uri: 'http://4.bp.blogspot.com/-9VC3IjgpC3I/T3Udti0BH_I/AAAAAAAABgA/N-3y7i6uzaI/s1600/Alien+Eyes+Wallpapers+3.jpg'}} />
          <Image style = {styles.img2} source={{uri: 'http://1.bp.blogspot.com/-dVz_71071d4/Ubp6rVJtJvI/AAAAAAAA6DU/-5I0LPsyL5s/s400/1.jpg'}} />
          <Button style = {styles.press1} title="Click Me!" onPress={() => setmodalOn(true)} />
          <SampleModal visible = {modalOn} onClose={() => setmodalOn(false)} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  img: {
    width: 250,
    height: 150
  },
  img2: {
    width: 150, 
    height: 150
  },
  press: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'white',
    paddingBottom: 30,
    fontStyle:'italic'
  }
});