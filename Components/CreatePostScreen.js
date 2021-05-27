import React from 'react';
import { View, Text } from 'react-native';


function CreatePostScreen(){
    return(
        <View style={{backgroundColor: "yellow", height: 1500}}>
            <Text style={{textAlign: "center", marginTop: 300, fontSize:30, color: "black"}}>
                CreatePost
            </Text>
        </View>
    );
}

export default CreatePostScreen;