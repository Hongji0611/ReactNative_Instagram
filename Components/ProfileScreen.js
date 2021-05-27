import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ProfilePicture from './ProfilePictures/ProfilePicture';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const cols = 3;
const marginHorizontal = 2;
const marginVertical = 2;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));

function ProfileScreen(){
    return(
        <View style={{height: 1500, backgroundColor: "#fff"}}>
            <View style={{padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}}>
                <ProfilePicture uri = {'https://img.hankyung.com/photo/201608/BF.12343403.1.jpg'} size={80}/>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 18}}>
                    <View style={{ margin: 20, alignItems: 'center'}}>
                        <Text style={{fontSize:18, fontWeight: 'bold',}}>0</Text>
                        <Text>게시물</Text>
                    </View>
                    <View style={{ margin: 20, alignItems: 'center'}}>
                        <Text style={{fontSize:18, fontWeight: 'bold',}}>1M</Text>
                        <Text>팔로워</Text>
                    </View>
                    <View style={{ margin: 20, alignItems: 'center'}}>
                        <Text style={{ fontSize:18, fontWeight: 'bold',}}>120</Text>
                        <Text>팔로잉</Text>
                    </View>
                </View>
            </View>
            <Text style={{marginLeft:20}}>정선아</Text>
            <Text style={{
                textAlign: 'center',
                padding: 8,
                margin:10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#c4c4c4",
                fontWeight: 'bold',
            }}>프로필 편집</Text>
            <ScrollView style={stylesGrid.scrollContainer}>
                <View style={stylesGrid.sectionContainer}>
                    <Image
                        style={stylesGrid.boxContainer}
                        source={{uri: 'http://ticketimage.interpark.com/Play/image/large/21/21000232_p.gif'}}/>
                    <Image
                        style={stylesGrid.boxContainer}
                        source={{uri: 'https://lh3.googleusercontent.com/proxy/ObSy2px6qTXkEk1blAMaPQZ7msT6RqomiogGItyna6NCURWkGjQ4Hvg4yKpN-8hldQAtcvWJ3EYHy-LRgFmaIleys_7LtVR88JoMXJWmKZMU3msLfUWp9A'}}/>
                    <Image
                        style={stylesGrid.boxContainer}
                        source={{uri: 'https://img.hankyung.com/photo/202009/01.23967293.1-1200x.jpg'}}/>
                   
                </View>
            </ScrollView>
        </View>
    );
}
const stylesGrid = StyleSheet.create({
    scrollContainer: {
      flex: 1,
    },
    sectionContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxContainer: {
      marginTop: marginVertical,
      marginBottom: marginVertical,
      marginLeft: marginHorizontal,
      marginRight: marginHorizontal,
      width: width,
      height: width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gold',
    },
  });
export default ProfileScreen;