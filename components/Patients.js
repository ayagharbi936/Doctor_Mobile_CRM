import React, {Component} from 'react';
import Style from '../style/Style';
import {
  View,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Dimensions,

} from 'react-native';
import {ListItem, Input, Avatar, Icon} from 'react-native-elements';



class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {clients:[],
      allClients:[]};
  }
  componentDidMount = async () => {
    this.setState({isLoading: true});
      
    fetch('http://crmerp.goinprod.com/api/clients', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          allClients:responseJson.clients,
          clients: responseJson.clients,
          
        });
      })
  
      .catch(error => {
        console.log(error);
      });
    this.setState({isLoading: false});
  };
  Search(name) {
    fetch('http://crmerp.goinprod.com/api/search/' + name, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          clients: responseJson.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>this.displayDetailForPatient(item)}>
      <ListItem bottomDivider  >
        <Avatar
          title={item.name[0] + item.surname[0]}
          rounded
          
          size={60}
          titleStyle={{color: '#fff', fontWeight: 'bold', fontSize: 20}}
          source={{
            uri: item.cover_image,
          }}
        />
        <ListItem.Content>
          <ListItem.Title>{item.name} {item.surname}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
  displayDetailForPatient (client)  {
    this.props.navigation.navigate('patientDetails', {
      client: client,
      
    });
  };
  render() {
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
                backgroundColor: 'white',
                borderRadius: 50,
              }}>
        <Input
          containerStyle={{marginTop: 30, width: 400, alignSelf: 'center'}}
          inputContainerStyle={{
            borderWidth: 2,
            borderColor: '#fff',
            backgroundColor: '#fff',
          }}
          onChangeText={value => {
              if (value !== '') {
                this.Search(value);
              } else {
                this.setState({
                  clients: this.state.allClients,
                });
              }
            }}
          placeholder="Chercher..."
          leftIcon={{type: 'font-awesome', name: 'search', color: '#2460d7'}}
          leftIconContainerStyle={{margin: 20}}
        />
        <FlatList
          style={{margin: 6}}
          keyExtractor={this.keyExtractor}
          data={this.state.clients}
          renderItem={this.renderItem}
         
        />
        </View>
      </ImageBackground>
    );
  }
}

export default Patients;
