//BSCS 3-3
//Chavez, Hanna Nicole
//Manzano, All Jhane
//Nogot, Jonvic
//Villanueva, Pauline

import React,{useState, useEffect}  from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData(){
    setLoading(true);
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then ((json) => {
      setData(json.results[0]);
      console.log(json.results[0]);
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={globalStyles.containerH}>
        <View style={globalStyles.designH}>
          <View style={globalStyles.itemsH}>
            <ScrollView>
              <View style={globalStyles.imageviewH}>
                 { isLoading ? <ActivityIndicator size="large" color="blue" /> : (
                <>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Profile', data)}> 
                <Image style={globalStyles.picsH} 
                  source={{uri: data.picture.large}} /> 
              </TouchableOpacity>  
              <Text style={globalStyles.textstyleH}>
                {data.name.title} {data.name.first} {data.name.last} 
              </Text>
              </> 
              )}
              </View>
              <View style={globalStyles.buttonstyleH}>
                <Button
                  title="Random User"
                  onPress={fetchRandomData}
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
