import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from '../Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {cities} from '../cityData';
import Cards from '../components/Cards';

const Home = ({navigation}) => {
  const [city, setCity] = useState('');
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image1.jpg')}
        style={styles.bgImageStyle}
        imageStyle={styles.imageStyle}
      />
      <View style={styles.iconContainer}>
        <View style={styles.iconStyle}>
          <Icon name="menu" size={40} color="white" />
          <Image
            source={require('../assets/images/user.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.greetingMessageStyle}>Hello User</Text>
          <Text style={styles.searchCityTextStyle}>Search city by name</Text>
          <View style={styles.searchBoxContainer}>
            <TextInput
              placeholder="Search City"
              placeholderTextColor={'white'}
              style={styles.textInputStyle}
              value={city}
              onChangeText={val => {
                setCity(val);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailsScreen', {
                  name: city,
                });
              }}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.locationsTextStyle}>My Locations</Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => {
              return (
                <View>
                  <Cards
                    name={item.name}
                    image={item.image}
                    navigation={navigation}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 4,
    // borderWidth: 2,
    // borderColor: 'white',
    alignItems: 'center',
    width: deviceWidth - 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    marginTop: 100,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    // borderWidth: 2,
    // borderColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  bgImageStyle: {
    height: deviceHeight,
    width: deviceWidth,
  },
  textInputStyle: {
    // backgroundColor: 'white',
    width: 270,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'white',
  },
  imageStyle: {
    opacity: 0.6,
    backgroundColor: 'black',
  },
  locationsTextStyle: {
    color: 'white',
    fontSize: 25,
    paddingHorizontal: 10,
    // borderWidth: 2,
    // borderColor: 'white',
    marginTop: 220,
    marginBottom: 20,
  },
  greetingMessageStyle: {
    fontSize: 40,
    color: 'white',
  },
  searchCityTextStyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Home;
