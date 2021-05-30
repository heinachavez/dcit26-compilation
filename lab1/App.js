//BSCS 3-3
// Chavez, Hanna Nicole C.
// Manzano, All Jhane G.
// Villanueva, Pauline M.

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.inang}>
      <Text style={styles.wushu}>
      </Text>
      <Card>
        <AssetExample />
      </Card>
            
    </View>
  );
}
const styles = StyleSheet.create({
  inang: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFC0CB',
    padding: 8,
  },
  wushu: {
    fontSize: '50%',
    fontWeight: 'bold',
    textAlign: 'side',
    color: '#fff'
  },
});
