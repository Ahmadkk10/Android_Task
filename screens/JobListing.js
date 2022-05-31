import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text,Alert, View, ScrollView} from 'react-native';
import JobCard from '../components/JobCard';
// import * as LocalAuthentication from "expo-local-authentication";


const JobListing = props => {
  const [results, setResults] = useState([]);
  // const [grantAccess, setGrantAccess] = useState(true);

  const fetchApi = async () => {
    const response = await axios.get(
      'https://run.mocky.io/v3/59c1e41b-4d89-4f2f-90f5-abd5e59c1350',
    );
    const jsondata = await response.data;
    console.log(jsondata);
    setResults(jsondata.jobs);
  };
  //console.log(results);

  useEffect(() => {
    fetchApi();
    // (async () => {
    //   const auth = await LocalAuthentication.authenticateAsync();
    //   if (auth.success) 
    //   setGrantAccess(true);
    //   else 
    //   setGrantAccess(false);
    // })();
  }, []);

  return (
    <ScrollView>
      <View
        style={styles.container}>
        {results.map((item, index) => {
          return (
            <JobCard
              navigation={props.navigation}
              key={index}
              item={item.jobDetails}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'orange',
    height: 'auto',
  },
});

export default JobListing;