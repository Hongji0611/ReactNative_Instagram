import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import FTIcon from 'react-native-vector-icons/Feather';
import IIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles'

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
    
    const [isLiked, setIsLike] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const onLikePressed= () => {
        // console.warn("On Like pressed");
        const amount = isLiked ? -1 : 1;
        setLikesCount(likesCount + amount);
        setIsLike(!isLiked);
    }

    useEffect( () => {
        setLikesCount(likesCountProp);
    }, [])
    
    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLiked ? <Icon name="heart" size={25} color="#e73838" />
                           :<Icon name="hearto" size={25} color="#545454" /> }
                        
                    </TouchableWithoutFeedback>
                    <FTIcon name="message-circle" size={25} color="#545454" />
                    <IIcon name="paper-plane-outline" size={25} color="#545454" /> 
                </View>
                <FIcon name="bookmark-o" size={25} color="#545454" />
            </View>
            <Text style={styles.likes}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}

export default Footer;