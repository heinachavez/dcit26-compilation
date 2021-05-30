//BSCS 3-3
// Chavez, Hanna Nicole C.
// Manzano, All Jhane G.
// Nogot, Jonvic
// Villanueva, Pauline M.


import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';


export default function App () {
  const [items, setItems] = useState ('');
  const [count, setCount] = useState ([]);
  const [clearText,setClearText] = useState ('');
  const [submittedText,setSubmittedText] = useState ('');


  const itemsInputHandler = (enteredText) => {
    setItems(enteredText);
    setClearText(enteredText);
  };
  
  const addInputHandler = () => {
    setSubmittedText(clearText);
    setClearText ('');
    setCount(currentCount => [...currentCount, clearText]);
  };

  return (
    <View style = {styles.container} >
      <View style = {styles.topcontainer} >
        <View style = {styles.inputItem}>
        <TextInput placeholder = " Enter Item " 
        style= {styles.input} 
        onChangeText={itemsInputHandler}
        value= {clearText} />
        <Button title = "ADD"
        color= '#0080FE'
        onPress= {addInputHandler} />
        </View>
          <View> 
        {count.map((enter) => (
            <View key={enter} style={styles.listItem}>
            <Text> {enter} </Text>
            </View>
            ))}
          </View>
      </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    padding: 30 ,
    flex: 1,
    backgroundColor: '#778899'
},
  topcontainer: {
    padding: 20 , 
    backgroundColor: '#FAF0E6',
    borderRadius: 20
    
},
inputItem: {
  flexDirection: 'row', 
  justifyContent: 'space-between',
  alignItems: 'center' ,

},
input: {
  width: '100%', 
  height: '140%', 
  borderColor:'gray', 
  borderWidth: 2, 
  padding: 5 

},
listItem: {
  padding: 10,
  marginTop: 10,
  backgroundColor: 'gray',
  borderColor: 'black',
  borderWidth: 2,
  borderRadius: 10

}
});