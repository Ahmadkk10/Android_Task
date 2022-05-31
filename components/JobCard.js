import React from 'react';
import {TouchableOpacity, View, ScrollView} from 'react-native';
import Card from './Card';

const JobCard = props => {
  const {item} = props;
  return (
      <TouchableOpacity
        style={{marginBottom: 5, marginLeft:16, paddingTop:10 }}
        onPress={() => props.navigation.navigate('JobDetails', {item: item})}>
        <View style={{backgroundColor: 'orange'}}>
          <Card {...item} />
        </View>
      </TouchableOpacity>
  );
};

export default JobCard;
