import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IdentificationScreen from "./screens/IdentificationScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*
      <View style={styles.container}>
        <Text style={styles.titleTxt}>Enter API Key Below</Text>
        
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} showsUserLocation={true}/>
        <StatusBar style="auto" />
      </View>
      */}
      <Stack.Navigator initialRouteName = "Identification">
        <Stack.Screen name = "Identification" component={IdentificationScreen} />
        <Stack.Screen name = "Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}


