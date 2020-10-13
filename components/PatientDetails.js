import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Style from '../style/Style';

import {Avatar, Icon, Button} from 'react-native-elements';

const list = [
  {
    title: 'Lorem ipsum dolor sit amet',
    notes:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, ...',
    symptomes:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, ...',
    date: 'Sep 02',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    notes:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, ...',
    symptomes:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, ...',
    date: 'Aou 10',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    notes:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, ...',
    symptomes:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, ...',
    date: 'Jui 05',
  },

];
class PatientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {client} = this.props.route.params;
    return (
      <ImageBackground
        source={require('../images/bg1.png')}
        style={(Style.backgroundIMG, Style.mainContainer)}>
        <TouchableOpacity>
          <Icon
            containerStyle={{
              marginTop: 20,
              alignSelf: 'flex-start',
              marginLeft: 10,
            }}
            name="arrow-back"
            type="Ionicons"
            color="#fff"
            size={35}
            onPress={() => this.props.navigation.goBack()}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            bottom: -50,
            backgroundColor: '#fdfdfd',
            borderRadius: 50,
          }}>
          <Avatar
            title={client.name[0] + client.surname[0]}
            rounded
            containerStyle={{top: -70, alignSelf: 'center'}}
            size={140}
            titleStyle={{color: '#fff', fontWeight: 'bold', fontSize: 50}}
            source={{
              uri: client.cover_image,
            }}
          />
          <Text
            style={{
              fontWeight: '600',
              fontSize: 35,
              marginTop: -60,
              marginBottom: 10,
              color: '#000',
              textAlign: 'center',
            }}>
            {client.name} {client.surname}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <View style={{marginLeft: 20, flex: 1}}>
              <Text style={{fontSize: 17, fontWeight: '700', color: '#2C3A47'}}>
                Sexe: {client.sexe}
              </Text>

              <Text style={{fontSize: 17, fontWeight: '700', color: '#2C3A47'}}>
                Age:{client.age} ans
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700', color: '#2C3A47'}}>
                Date de naissance: {client.birthday}
              </Text>
            </View>

            <View style={{flex: 1}}>
              <Text style={{fontSize: 17, fontWeight: '700', color: '#2C3A47'}}>
                Type de sang: {client.blood}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700', color: '#2C3A47'}}>
                Téléphone: +216 {client.phone}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700', color: '#2C3A47'}}>
                Dossier N°:{client.folder_number}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Button
            onPress={()=>{this.props.navigation.navigate('patientGallery')}}
              icon={{type: 'FontAwesome', name: 'image', color: '#2460d7'}}
              buttonStyle={{
                backgroundColor: '#F5F5f5',
                borderRadius: 20,
                width: 350,
                height: 70,
                alignSelf: 'center',
                marginBottom: 10,
              }}
              titleStyle={{color: '#2460d7', fontSize: 18, textAlign: 'center'}}
              title="Gallerie"></Button>
          </View>

          <View style={{margin: 30}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Historique:</Text>
          </View>
          <View style={{paddingBottom: 50, flex: 1}}>
            <ScrollView
              style={{
                paddingHorizontal: 20,
                margin: 5,
               flex:1
              }}>
              {list.map((item, key) => (
                <View key={key} style={{flexDirection: 'row', flex: 1}}>
                  <Text
                    style={{
                      marginRight: 20,
                      color: '#a1a1a1',
                      fontWeight: 'bold',
                    }}>
                    {item.date}
                  </Text>
                  <View style={{width: 300}}>
                    <Text style={{fontWeight: 'bold'}}>{item.title} </Text>
                    <Text style={{color: '#616161'}}>{item.notes} </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
     </View>
      </ImageBackground>
    );
  }
}

export default PatientDetails;
