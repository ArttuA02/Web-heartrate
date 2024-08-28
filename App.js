import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [hr, setHr] = useState('')

  const calculateHr = (text) => {
    setAge(text)
    const ageNumber = parseFloat(text.replace(',', '.'));
    
    const minHr = (220 - ageNumber) * 0.65
    const maxHr = (220 - ageNumber) * 0.85
    setHr(`${minHr} - ${maxHr}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={calculateHr}
        keyboardType='decimal-pad'
      />

      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{hr}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
