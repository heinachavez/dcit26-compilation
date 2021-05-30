//BSCS 3-3
//Chavez, Hanna Nicole
//Manzano, All Jhane
//Nogot, Jonvic
//Villanueva, Pauline

import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.design}>
          <View style={styles.items}>
            <ScrollView>
              <View style={styles.imageview}>
                <Image
                  style={styles.pics}
                  source={require('../assets/sunflower.png')}
                />
              </View>
              <Text style={styles.textstyle}>
                Welcome to The Van Gogh Gallery !{'\n\n'} The definitive
                reference for information about the life and work of Vincent van
                Gogh. With a career that ran a little over a decade, he produced
                an astonishing amount of work: 1,000 drawings, 150 watercolors,
                10 watercolors, 9 lithographs, an etching, and over 900
                paintings. We have also put together his biography, spanning his
                youth until death, going into his mental state, his influences,
                and the world in which he lived. We hope to share Van Gogh’s
                legacy with as many people as we can and give his genius the
                appreciation he lacked in life.
              </Text>
              <View style={styles.buttonstyle}>
                <Button
                  title="Profile"
                  onPress={() => navigation.navigate('Profile')}
                  color="#2c3e50"
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFB7',
    padding: 20,
  },

  design: {
    flex: 1,
    padding: 10,
  },

  items: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageview: {
    flex: 1,
  },

  pics: {
    height: 380,
    width: 350,
  },

  textstyle: {
    padding: 5,
    margin: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  buttonstyle: {
    width: 150,
    alignSelf: 'center',
    padding: 10
  },
});
