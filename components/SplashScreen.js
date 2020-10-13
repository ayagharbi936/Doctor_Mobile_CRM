import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Style from '../style/Style.js';
import AsyncStorage from '@react-native-community/async-storage';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }
  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem('user');

      if (value !== null) {
        // We have data!!
        this.setState({user: JSON.parse(value)});
      }
    } catch (error) {
      console.log('Error retrieving data');
    }
    this.timeoutHandle = setTimeout(() => {
      if (this.state.user === '') {
        this.props.navigation.navigate('login');
      } else {
        this.props.navigation.navigate('home');
      }
    }, 2000);
  };

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
  render() {
    return (
      <View style={Style.mainContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../images/logo.png')} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>copyrights 2020</Text>
        </View>
      </View>
    );
  }
}

export default SplashScreen;
