import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../Dimensions';

const Cards = ({name, image, navigation}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} onPress={()=>{
      navigation.navigate('DetailsScreen', {name})
    }}>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 16}}
      />
      <View style={{width: '100%', height: '100%'}}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            // textAlignVertical: 'center',
            width: '100%',
            height: '100%',
            color: 'white',
            // fontWeight: 'bold',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
