import React, {Component} from 'react';
import {View, Image, Dimensions, FlatList} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import {Icon} from 'react-native-elements';
import Style from '../style/Style';

class PatientGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      images: [],
      isLoading: false,
    };
  }

  componentDidMount = (response) => {
    this.setState({isLoading: true});
    this.state.images.unshift(this.state.filePath);
    this.setState({isLoading: false});
  };

  handleChoosePhoto = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({
          filePath: 'data:image/jpeg;base64,' + response.data,
        });
        this.componentDidMount();
      }
    });
  };
  render() {
    return (
      <View style={Style.mainContainer}>
        <Icon
          raised
          name="plus"
          type="feather"
          color="#2460d7"
          size={25}
          containerStyle={{elevation: 10, margin: 30, alignSelf: 'flex-end'}}
          onPress={() => this.handleChoosePhoto()}
        />

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
           flex:1, paddingBottom:100
          }}>
          
            <FlatList
              keyExtractor={(item) => item.key}
              
             
              data={this.state.images}
              
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <View>
                    <Image
                      style={{
                        width: Dimensions.get('window').width / 2 - 20,
                        height: 300,
                        margin: 10,
                        borderRadius: 10,
                      }}
                      source={{uri: item}}
                    />
                  </View>
                );
              }}
            />
          
        </View>
      </View>
    );
  }
}

export default PatientGallery;
