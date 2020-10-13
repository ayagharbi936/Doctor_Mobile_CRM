import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Style from '../style/Style';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Style.mainContainer}>
        <Text> Search </Text>
      </View>
    );
  }
}

export default Search;
