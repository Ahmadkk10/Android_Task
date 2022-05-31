import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

const JobDeatils = props => {
  const [item, setItem] = useState(props.route.params.item);
  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: 50, padding: 5}}>
        <View style={styles.contentContainer}>
          <Text style={styles.contentHeader}>JOB NAME: {item.job_name ? item.job_name : 'MISSING'}</Text>
        </View>
        <View style={styles.contentContainer2}>
          <Text style={styles.contentText2}>
            Job Status Id: {item.jobStatusId ? item.jobStatusId : 'MISSING'}
          </Text>
          <Text style={styles.contentText2}>
            Job Status Name: {item.jobStatusName ? item.jobStatusId : 'MISSING'}
          </Text>
          <Text style={styles.contentText2}>
            Job Signoff Customer Signature:{' '}
            {item.jobSignoffCustomerSignature
              ? item.jobSignoffCustomerSignature
              : 'MISSING'}
          </Text>
          <Text style={styles.contentText2}>
            Details: {item.details ? item.details : 'MISSING'}
          </Text>
          <Text style={styles.contentText2}>
            Start Date: {item.startDate ? item.startDate : 'MISSING'}
          </Text>
          <Text style={styles.contentText2}>
            WoApp Ticket Type:{' '}
            {item.woAppTicketType ? item.woAppTicketType : 'MISSING'}
          </Text>
          <Text style={styles.contentText2}>
            Job_client_ptr:{' '}
            {item.job_client_ptr ? item.job_client_ptr : 'MISSING'}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'orange',
    height: '100%',
    width: 'auto',
  },
  contentContainer: {
    marginTop: 150,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'lightblue',
  },
  contentContainer2: {
    paddingLeft: 4,
    backgroundColor: 'white',
  },
  contentText2: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contentHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    padding: 8,
  },
});

export default JobDeatils;
