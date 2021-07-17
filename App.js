import React from 'react';
import { StyleSheet, Text, View, Alert,StatusBar } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "54bb548dbc9022336f63a5eccfabc5bd";

class App extends React.Component{
  state={
    isLoading: true,
    temp: 0
  }
  getWeather= async(latitude,longitude) =>{
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(data);
    console.log(data.weather);
    this.setState({isLoading:false, condition:data.weather[0].main ,temp:data.main.temp});
  }
  getLocation = async() =>{
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: {latitude,longitude} } = await Location.getCurrentPositionAsync();
      console.log(latitude,longitude);
      //Send to API and get weather
      this.getWeather(latitude,longitude);
      
    } catch (error) {
      Alert.alert("Can't find you.","So sad");
    }
  
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading,temp,condition} = this.state;
    return(
        isLoading ? <Loading></Loading> : <Weather temp={Math.round(temp)} condition={condition}></Weather>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    
  },
  yellowView:{
    flex: 1,
    backgroundColor: 'yellow'
  },
  blueView:{
    flex: 1,
    backgroundColor: 'blue'
  }
});

export default App
