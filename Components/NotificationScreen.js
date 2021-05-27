import React from 'react';
import { View, Text } from 'react-native';


function NotificationScreen(){
    return(
        <View style={{backgroundColor: "green", height: 1500}}>
            <Text style={{textAlign: "center", marginTop: 300, fontSize:30, color: "black"}}>
                Notification
            </Text>
        </View>
    );
}

export default NotificationScreen;