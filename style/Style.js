import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },

  txtInput: {
    height: 50,
    width: 300,
    borderRadius: 30,
    borderColor: '#cccccc',
    borderWidth: 1,
    paddingLeft: 20,
  },

  btn: {
    borderRadius: 20,
    width: 300,
    backgroundColor: '#00c6b5',
    borderColor: '#00c6b5',
    height: 50,
    alignSelf: 'center',
   
    
  },

  titleBtn: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#00c6b5',
    fontSize: 17,
  },
  backgroundIMG: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
