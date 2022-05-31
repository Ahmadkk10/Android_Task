import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login"
import JobListing from "./screens/JobListing"
import JobDetails from "./screens/JobDetails"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
const StackNavigator = () => (
   <Stack.Navigator initialRouteName= "Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="JobListing" component={JobListing} />
      <Stack.Screen name="JobDetails" component={JobDetails} />
   </Stack.Navigator>
);

export default function App() {
  return (
      <View style={styles.container}>
        <NavigationContainer>
           <StackNavigator />
        </NavigationContainer>
    
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    height: "auto",
  },
});
