import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth} from '../Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from '../Constants';
import WeatherData from '../components/WeatherData';

const Details = props => {
  const {name} = props.route.params;
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image2.jpg')}
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
        {data ? (
          <View style={styles.cityWeatherContainer}>
            <View>
              <Text style={[styles.cityTextStyle, {textAlign: 'center'}]}>
                {name}
              </Text>
              <Text style={[styles.weatherTextStyle, {textAlign: 'center'}]}>
                {capitalizeFirstLetter(data.weather[0].description)}
              </Text>
            </View>
            <Text style={styles.tempTextStyle}>
              {data.main.temp.toFixed(1)}&deg;C
            </Text>
            <View>
              <Text style={styles.detailsTextStyle}>Weather Details</Text>
              <View style={{width: deviceWidth - 60}}>
                <WeatherData
                  title={'Wind'}
                  value={(data.wind.speed * 1.6).toFixed(2)}
                  unit={' kmph'}
                />
                <WeatherData
                  title={'Pressure'}
                  value={data.main.pressure}
                  unit={' hPa'}
                />
                <WeatherData
                  title={'Humidity'}
                  value={data.main.humidity}
                  unit={' %'}
                />
                <WeatherData
                  title={'Visibility'}
                  value={data.visibility}
                  unit={' metres'}
                />
              </View>
            </View>

            {/* {console.log(data.weather[0].description)} */}
            {/* {console.log(data)} */}
          </View>
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cityWeatherContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    // borderColor: 'white',
    // borderWidth: 2,
    justifyContent: 'space-evenly',
    height: deviceHeight - 100,
  },
  cityTextStyle: {
    fontSize: 40,
    color: 'white',
  },
  tempTextStyle: {
    color: 'white',
    fontSize: 64,
  },
  detailsTextStyle: {
    color: 'white',
    fontSize: 22,
    marginBottom: 16,
  },

  bgImageStyle: {
    height: deviceHeight,
    width: deviceWidth,
  },
  imageStyle: {
    opacity: 0.6,
    backgroundColor: 'black',
  },
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
  weatherTextStyle: {
    color: 'white',
    fontSize: 22,
  },
});

export default Details;
