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

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.design}>
          <View style={styles.items}>
            <ScrollView>
              <View style={styles.imageview}>
                <Image
                  style={styles.pics}
                  source={require('../assets/Vangogh.png')}
                />
              </View>
              <Text style={styles.textstyle}>
                Who Was Vincent van Gogh? {'\n'}- Vincent van Gogh was a
                post-Impressionist painter whose work notable for its beauty,
                emotion and color highly influenced 20th-century art. He
                struggled with mental illness and remained poor and virtually
                unknown throughout his life. {'\n\n'}
                Birth Year : March 30, 1853 {'\n\n'}
                Death Year : July 29, 1890 {'\n\n'}
                Country : Netherlands, Vincent van Gogh, one of the most
                well-known post-impressionist artists, for whom color was the
                chief symbol of expression, was born in Groot-Zundert Holland on
                March 30, 1853.
              </Text>
              <View style={styles.buttonstyle}>
                <Button
                  title="Go back Home"
                  onPress={() => navigation.navigate('Home')}
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

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E1F5FE',
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
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 20,
    lineHeight: 17,
    marginBottom: 20,
  },

  buttonstyle: {
    width: 150,
    alignSelf: 'center',
  },
});
