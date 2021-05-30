//BSCS 3-3
//Chavez, Hanna Nicole
//Manzano, All Jhane
//Nogot, Jonvic
//Villanueva, Pauline

import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Button, Modal, StyleSheet, Image} from 'react-native';

const SampleModal = props => {
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style = {styles.container}>
        <SafeAreaView>
        <ScrollView>
          <Image style={styles.pics} source={{uri: 'https://4.bp.blogspot.com/-aOG8EJr7uQw/V6NUKbprPUI/AAAAAAAACOY/U_Nl02GkvikWTEkhJS31rou-RWtnzV0BgCEw/s1600/what%2Bif.jpg'}} resizeMode="contain" />
          <Text style = {styles.text}>
          In June 1947, while flying his small plane, businessman and civilian pilot Kenneth Arnold reported seeing nine objects moving at high speeds through the skies over Washington’s Mount Rainier. Widely publicized reports of Arnold’s experience, followed by an increasing number of reported UFO sightings, led the U.S. Air Force to begin an investigation into the sightings, called Operation Sign, in 1948.{'\n\n'}The initial investigation resulted in the formation of Project Blue Book in 1952; that project became the longest running of the U.S. government’s official inquiries into UFO sightings, compiling reports on more than 12,000 sightings or related events from 1952 to its dismantling in 1969.{'\n\n'}Though reports of mysterious flying objects–often attributed to spirits, angels, phantoms, ghosts or other supernatural phenomena–have existed for centuries, World War II and the accompanying development of rocket science marked a new level of interest in what would officially become known as unidentified flying objects (UFOs). The first well-known UFO sighting occurred in June 1947, when civilian pilot and businessman Kenneth Arnold reported seeing nine objects, glowing bright blue-white, flying in a “V” formation at speeds of up to 1,700 mph in the skies over Washington’s Mount Rainier.{'\n\n'}After news of Arnold’s experience hit the media, a rash of similar sightings were reported across the United States, including a highly controversial report of what appeared to be a crashed UFO near a U.S. Army base in Roswell, New Mexico. (The Army claimed the object in question was the wreckage of a weather balloon, claims that conspiracy-minded “ufologists” would later dispute.) In response to the increasing number of UFO-related reports, the U.S. Air Force launched Operation Sign in 1948. Among the initial theories of the project’s participants was that some UFOs were actually Soviet aircraft (this was the Cold War era, after all), although they also posed the hypothesis that some might be extraterrestrial spacecraft.
          </Text>
        </ScrollView>
        <Button title="Close" onPress={props.onClose} />
      </SafeAreaView>
      
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    margin: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
   textAlign: 'justify' ,
   padding: 5,
   backgroundColor:'black',
   color: 'white',
   fontStyle:'italic'
  },
  pics: {
    width: 350,
    height: 200,
    
  }
});

export default SampleModal;