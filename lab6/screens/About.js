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
  StyleSheet,
  ScrollView,
} from 'react-native';
import { globalStyles } from '../styles/global';

const About = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={globalStyles.containerA}>
        <View style={globalStyles.designA}>
          <View style={globalStyles.itemsA}>
            <ScrollView>
              <Text style={globalStyles.textstyleA}>
                {'\n'} Bleeeeeehhhhhh!!{'\n\n'}
                Let's take a deep breath, calm our mind and chill like a villain!{'\n\n'}
                Have a Good Day sir!
              </Text>
              <View style={globalStyles.buttonstyleA}>
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
