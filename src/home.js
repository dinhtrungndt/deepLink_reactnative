/* eslint-disable prettier/prettier */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('detail', {id: 1})}
      />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
