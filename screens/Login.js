import React, {useEffect, useContext, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Alert,
  Button,
} from 'react-native';
// import ReactNativeBiometrics from 'react-native-biometrics';
// import * as LocalAuthentication from 'expo-local-authentication';
// import SecureFile from '../components/SecureFile';
import JobListing from './JobListing';

const Login = props => {
  // const [biometrics, setBiometrics] = useState(false);
  // const [renderContent, setRenderContent] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const compatible = await LocalAuthentication.hasHardwareAsync();
  //     setBiometrics(compatible);
  //   })();
  // }, []);

  // const renderSecureContent = () => setRenderContent(true);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.textdesign}>LOGIN FOR JOB DETAILS</Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('JobListing')}>
          <Text style={styles.registerText}>LOGIN</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity >
          <Text style={styles.printcheck}>Authenticate with Biometrics</Text>
        </TouchableOpacity> */}
        {/* <Text>
       
       {biometrics
         ? "Your device is compatible with Biometrics"
         : "Face or Fingerprint scanner is available on this device"}
     </Text> */}
        {/* {renderContent ? <JobListing />: }
      <Button title="Login" onPress={renderSecureContent} /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    height: 700,
  },
  textdesign: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  contentContainer: {
    marginTop: 5,
    margin: 5,
    borderRadius: 15,
    borderWidth: 5,
    backgroundColor: 'lightblue',
  },
  registerText: {
    marginBottom: 15,
    marginTop: 150,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  printcheck: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Login;
