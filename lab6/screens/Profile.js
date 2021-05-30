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
  TextInput
} from 'react-native';
import { globalStyles } from '../styles/global';

const Profile = ({ route, navigation }) => {
  const data = route.params; 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={globalStyles.containerP}>
        <View style={globalStyles.designP}>
          <View style={globalStyles.itemsP}>
            <ScrollView>
              <View style={globalStyles.imageviewP}>
                <Image
                  style={globalStyles.picsP}
                  source={{uri: data.picture.large}} />
              </View>
              <View style={globalStyles.viewP}>
              <Text style={globalStyles.textstyleP}>
                Information about {data.name.title} {data.name.first} {data.name.last}:{'\n\n\n'}   
                Birthday : {data.dob.date} {'\n\n'}
                Age : {data.dob.age} {'\n\n'}
                Address: {data.location.street.number} {data.location.street.name}{data.location.city}, {data.location.state}
                {'\n\n'}
                Email: {data.email}
              </Text>
              </View>
              
              <View style={globalStyles.buttonstyleP}>
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
