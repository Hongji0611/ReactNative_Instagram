import React from 'react';
import { View, Text } from 'react-native';


function ProfileScreen(){
    return(
        <View style={{backgroundColor: "red", height: 1500}}>
            <Text style={{textAlign: "center", marginTop: 300, fontSize:30, color: "black"}}>
                Profile
            </Text>
        </View>
    );
}

export default ProfileScreen;