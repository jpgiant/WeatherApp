import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const WeatherData = ({title, value, unit}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={styles.detailsSubHeaderStyle}>{title}</Text>
      <Text style={styles.detailsInfoStyle}>{value+unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsSubHeaderStyle: {
    color: 'gray',
    fontSize: 22,
  },
  detailsInfoStyle: {
    color: 'white',
    fontSize: 22,
  },
});

export default WeatherData;
