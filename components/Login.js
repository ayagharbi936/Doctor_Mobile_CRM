import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Style from '../style/Style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      psw: '',
    };
  }
  onFocus(v) {
    this.setState({
      pressed: v,
    });
  }
  onBlur(v) {
    this.setState({
      pressed: v,
    });
  }
  render() {
    let {pressed} = this.state;
    return (
      <KeyboardAwareScrollView style={Style.mainContainer}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 100,
          }}>
          <Image source={require('../images/logo.png')} />

          <View
            style={{
              alignItems: 'center',
              marginTop: 80,
            }}>
            <Input
              onChangeText={(value) => {
                return this.setState({email: value});
              }}
              onBlur={() => this.onBlur(0)}
              onFocus={() => this.onFocus(1)}
              placeholder="Email"
              inputContainerStyle={{
                width: 290,
                borderBottomColor:
                  pressed === 1 || this.state.email != ''
                    ? '#00c6b5'
                    : '#a9a9a9',
              }}
              containerStyle={{
                marginBottom: 5,
              }}
              leftIcon={
                <FontAwesome
                  name="user"
                  style={{marginRight: 20}}
                  size={24}
                  color={
                    pressed === 1 || this.state.email != ''
                      ? '#00c6b5'
                      : '#a9a9a9'
                  }
                />
              }
              errorStyle={{color: 'red', fontSize: 17}}
              errorMessage={this.state.emailError}
            />

            <Input
              secureTextEntry={true}
              onChangeText={(value) => {
                return this.setState({psw: value});
              }}
              placeholder="Mot de passe"
              onBlur={() => this.onBlur(0)}
              onFocus={() => this.onFocus(2)}
              inputContainerStyle={{
                width: 290,
                borderBottomColor:
                  pressed === 2 || this.state.psw != '' ? '#00c6b5' : '#a9a9a9',
              }}
              containerStyle={{marginBottom: 30}}
              leftIcon={
                <FontAwesome
                  name="lock"
                  style={{marginRight: 20}}
                  size={24}
                  color={
                    pressed === 2 || this.state.psw != ''
                      ? '#00c6b5'
                      : '#a9a9a9'
                  }
                />
              }
              errorStyle={{color: 'red', fontSize: 17}}
              errorMessage={this.state.pswError}
            />
          </View>
          <Button
            buttonStyle={Style.btn}
            titleStyle={Style.titleBtn}
            title="Se connecter"
            onPress={()=>{this.props.navigation.navigate('home')}}
          />
        </View>

        
      </KeyboardAwareScrollView>
    );
  }
}

export default Login;
