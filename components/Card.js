import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Card = props => {
  const {
    jobStatusId,
    jobStatusName,
    jobSignoffCustomerSignature,
    job_name,
    details,
    startDate,
    woAppTicketType,
    job_client_ptr,
  } = props;
  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Text style={styles.contentHeader}>JOB NAME: {job_name ? job_name : 'MISSING'}</Text>
      </View>
      <Text style={styles.tex2}>
        Job Status Id: {jobStatusId ? jobStatusId : 'MISSING'}
      </Text>
      <Text style={styles.tex2}>
        Job Status Name: {jobStatusName ? jobStatusName : 'MISSING'}
      </Text>
      <Text style={styles.tex2}>
        Job Signoff Customer Signature:{' '}
        {jobSignoffCustomerSignature ? jobSignoffCustomerSignature : 'MISSING'}
      </Text>
      <Text style={styles.tex2}>Details: {details ? details : 'MISSING'}</Text>
      <Text style={styles.tex2}>
        Start Date: {startDate ? startDate : 'MISSING'}
      </Text>
      <Text style={styles.tex2}>
        Wo App Ticket Type: {woAppTicketType ? woAppTicketType : 'MISSING'}
      </Text>
      <Text style={styles.tex2}>
        Job_client_ptr: {job_client_ptr ? job_client_ptr : 'MISSING'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 2,
    marginBottom: 15,
    marginTop:4,
    overflow: 'hidden',
    shadowColor: 'grey',
    shadowOpacity: 10,
    shadowRadius: 29,
    shadowOffset: {
      height: 8,
      width: 8,
    },
  },
  tex2: {
    fontSize: 18,
    padding: 5,
    color: 'green',
    fontWeight: 'bold',
  },
  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'lightblue',
  },
  contentHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    padding: 8,
  },
});

export default Card;
