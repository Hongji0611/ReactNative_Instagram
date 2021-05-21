
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.logo} source={{uri: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"}} />
        <Image style={styles.dm} source={{uri: "https://www.pngjoy.com/pngl/178/3527922_instagram-app-logo-instagram-direct-message-icon-png.png"}} />
      </View>
      <View style={styles.middle}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.contentTop}>
              <Image style={styles.userImgSize} source={{uri: "https://image.flaticon.com/icons/png/512/1946/1946429.png"}} />
              <Text style={styles.contentId}>student.konkuk</Text>
              <Image style={styles.dotImgSize} source={{uri: "https://image.flaticon.com/icons/png/512/64/64576.png"}} />
            </View>
            <View style={styles.contentMiddle}>
              <Image style={{flex:1,width: '100%',}} source={{uri: "https://www.artinsight.co.kr/data/tmp/1908/1501cf89202c25ce439949ffd767c3dd_IUDfUfz6jJVJ.jpg"}}></Image>
            </View>
            <View style={styles.contentBottom}>
                <Image style={styles.contentBottomIcon} source={{uri: "https://image.flaticon.com/icons/png/512/1077/1077035.png"}} />
                <Image style={styles.contentBottomIcon} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNj0L54ldSPTTHG12xD88JuUBasxFTcXrQsb3p_OJuPo3C_FliBkCUgAvdESGRdPvEmk&usqp=CAU"}} />
                <Image style={styles.contentBottomIcon2} source={{uri: "https://image.flaticon.com/icons/png/512/4406/4406119.png"}} />
                <Image style={styles.contentBottomIcon} source={{uri: "https://image.flaticon.com/icons/png/512/4406/4406149.png"}} />
            </View>
            <View style={{padding:10}}>
              <Text>abc_def 님 외 63명이 좋아합니다</Text>
              <Text>상세 내용</Text>
            </View>
            <View style={{paddingHorizontal:10,}}>
              <Text>댓글 달기</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.contentTop}>
              <Image style={styles.userImgSize} source={{uri: "https://image.flaticon.com/icons/png/512/1946/1946429.png"}} />
              <Text style={styles.contentId}>student.konkuk</Text>
              <Image style={styles.dotImgSize} source={{uri: "https://image.flaticon.com/icons/png/512/64/64576.png"}} />
            </View>
            <View style={styles.contentMiddle}>
              <Image style={{flex:1,width: '100%',}} source={{uri: "https://i2.wp.com/sharehows.com/wp-content/uploads/2017/02/Portugal_immigration_02.jpg?resize=800%2C533"}}></Image>
            </View>
            <View style={styles.contentBottom}>
                <Image style={styles.contentBottomIcon} source={{uri: "https://image.flaticon.com/icons/png/512/1077/1077035.png"}} />
                <Image style={styles.contentBottomIcon} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNj0L54ldSPTTHG12xD88JuUBasxFTcXrQsb3p_OJuPo3C_FliBkCUgAvdESGRdPvEmk&usqp=CAU"}} />
                <Image style={styles.contentBottomIcon2} source={{uri: "https://image.flaticon.com/icons/png/512/4406/4406119.png"}} />
                <Image style={styles.contentBottomIcon} source={{uri: "https://image.flaticon.com/icons/png/512/4406/4406149.png"}} />
            </View>
            <View style={{padding:10}}>
              <Text>abc_def 님 외 63명이 좋아합니다</Text>
              <Text>상세 내용</Text>
            </View>
            <View style={{paddingHorizontal:10,}}>
              <Text>댓글 달기</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottom} >
        <Image style={styles.bottomIcon} source={{uri: "https://image.flaticon.com/icons/png/512/1946/1946436.png"}} />
        <Image style={styles.bottomIcon} source={{uri: "https://image.flaticon.com/icons/png/512/709/709592.png"}} />
        <Image style={styles.bottomIcon} source={{uri: "https://image.flaticon.com/icons/png/512/875/875068.png"}} />
        <Image style={styles.bottomIcon} source={{uri: "https://image.flaticon.com/icons/png/512/1077/1077035.png"}} />
        <Image style={styles.bottomIcon} source={{uri: "https://image.flaticon.com/icons/png/512/1946/1946429.png"}} />
      </View>
    </View>
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