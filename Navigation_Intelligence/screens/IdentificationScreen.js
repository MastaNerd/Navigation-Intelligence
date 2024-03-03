import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-maps';

export default function IdentificationScreen({ navigation }) {

    const [text, setText] = useState('');

    return ( 
    <View style={styles.container}>
        <TextInput
        style={styles.inputTxt}
        placeholder="Enter API Key"
        placeholderTextColor = "#FFFFFF" 
        onChangeText={newText => setText(newText)}
        
        />
        <Button title="Enter" onPress={() => navigation.navigate("Home")}/>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputTxt: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10, 
      color:'#FFFFFF',
      fontWeight: 'bold',
      fontSize: 36,
      borderBottomWidth: 0,
    },
    map: {
      Region: "9.827668, 77.444148",
      width: '100%',
      height: '75%',
  
    },
  });