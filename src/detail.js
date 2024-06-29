/* eslint-disable prettier/prettier */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const detail = ({route, navigation}) => {
  const {
    params: {id},
  } = route;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {id != 1 && <Text style={styles.attributeTitle}>Deeplink id = {id}</Text>}
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default detail;

const styles = StyleSheet.create({});
