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

const About = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.design}>
          <View style={styles.items}>
            <ScrollView>
              <View style={styles.imageview}>
                <Image
                  style={styles.pics}
                  source={require('../assets/catxstary.png')}
                />
              </View>
              <Text style={styles.textstyle}>
                {'\n'} Love many things, for therein lies the true strength, and
                whosoever loves much performs much, and can accomplish much, and
                what is done in love is done well.{'\n\n'}
                *What would life be if we had no courage to attempt anything?
              </Text>
              <View style={styles.buttonstyle}>
                <Button
                  title="Go Back"
                  onPress={() => navigation.goBack()}
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

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6699cc',
    padding: 10,
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
    alignSelf: 'center',
    height: 400,
    width: 350,
  },

  textstyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 50,
  },

  buttonstyle: {
    width: 120,
    alignSelf: 'center',
    padding: 10
  },
});
