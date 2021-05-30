import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.inang}>
      <Text style={styles.wushu}>
       Hello, World !
      </Text>
     <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-GgzQbJgtzTOTqv2iBWBiHCd3jd23Mv7Yw&usqp=CAU" }} style={{ width: 300, height: 300 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  inang: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: "black"
  },
  wushu: {

    fontSize: '200%',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'pink'
    
  },
  
  
});
