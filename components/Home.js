import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import Style from '../style/Style';
import {ListItem, Icon, Avatar} from 'react-native-elements';



const list = [
  {
    title: 'Patients',
    icon: 'group',
    screen: 'patients',
  },
  {
    title: 'Le planning',
    icon: 'date-range',
    screen: 'planing',

  },
  
  {
    title: 'Administrateurs',
    icon: 'admin-panel-settings',
    screen: 'admins',

  },
  {
    title: 'Stocks',
    icon: 'store',
    screen: 'stock',

  },
  {
    title: 'Paramétre',
    icon: 'settings',
    screen: 'settings',

  },
  
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc:'https://www.medtunisie.com/wp-content/uploads/2019/02/docteur-haifa-fodha.jpg',
    };
  }

  render() {
    return (
      <ImageBackground
        source={require('../images/bg2.png')}
        style={(Style.backgroundIMG, Style.mainContainer)}>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{marginLeft:35, fontSize:25, color:'#ecf0f1',fontWeight:'400'}}>
            Bienvenue,{'\n'}<Text style={{fontWeight:'bold', color:'#fff'}}>
            Dr. Haifa Fodha
          </Text>
          </Text>
          <Avatar
            containerStyle={{marginRight: 30}}
            size= {50}
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            activeOpacity={0.7}
            source={{
              uri:
                this.state.imageSrc === ''
                  ? 'null'
                  : this.state.imageSrc,
            }}
            onPress={() => this.props.navigation.navigate('profile1')}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            {list.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.item}
                  onPress={() => {this.props.navigation.navigate(item.screen)}}>
                  <Icon name={item.icon} color="#00c6b5" size={45} />
                  <Text style={styles.itemTitle}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center'
  },
  item: {
    width: Dimensions.get('window').width /2-40,
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 5,
    elevation: 7,
  },
  itemIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  itemTitle: {
    marginTop: 16,
    fontWeight: '700',
    fontSize: 17,
  },
});
export default Home;
