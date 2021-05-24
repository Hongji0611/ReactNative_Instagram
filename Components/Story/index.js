import React from 'react';
import ProfilePicture from '../ProfilePictures/ProfilePicture'
import { Text, View } from 'react-native' ;
import styles from './styles'


const Story = ({imageUri, name}) => {
    return (
        <View style = {styles.container}>
            <ProfilePicture uri={imageUri}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Story;
