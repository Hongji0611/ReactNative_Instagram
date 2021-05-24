
import React from 'react';
import HomeScreen from './Components/HomeScreen'

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';


const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  top:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle:{
    borderTopColor: '#D9DDDC',
    borderTopWidth:0.7,
    flex:9,
  },
  bottom:{
    flex:1,
    flexDirection: 'row',

  },

  content:{
    flex:1,
    height:500,
    flexDirection: 'column',
  },

  contentTop:{
    flex:0.9,
    flexDirection: 'row',
  },
  contentMiddle:{
    flex:5,
  },
  contentBottom:{
    flex:0.7,
    flexDirection: 'row',
  },

  contentBottomIcon:{
    flex:1,
    marginVertical:10,
    width: '100%',
    resizeMode:'contain',
  },
  contentBottomIcon2:{
    flex:1,
    marginVertical:10,
    marginRight:200,
    width: '100%',
    resizeMode:'contain',
  },


  logo:{
    flex:1,
    marginLeft: 20,
    width: '100%',
    height: '50%',
    resizeMode:'contain',
  },

  dm:{
    flex: 1,
    marginLeft:210,
    width: '100%',
    height: '80%',
    alignItems:'flex-end',
    resizeMode:'contain',
  },

  bottomIcon:{
    flex: 1,
    resizeMode:'contain',
    margin:15,
  },

  userImgSize:{
    margin:10,
    flex: 1,
    width: '100%',
    resizeMode:'contain',
  },

  dotImgSize:{
    margin:18,
    flex: 1,
    width: '100%',
    resizeMode:'contain',
  },

  contentId:{
    textAlign: 'justify',
    lineHeight: 58,
    marginRight:180,
    fontSize: 18,
  }


})

export default App;