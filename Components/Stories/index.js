import { View } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import Story from '../Story/index';
import styles from './styles'

const data = [
    {
        imageUri: 'https://d7p29s5ird9zx.cloudfront.net/upFiles/StageTalkV2/Editor/2019/3/8/20190308040829c6275cea965f4689a711842900103d24.jpg',
        name: '최재림',
    },
    {
        imageUri: 'http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/07/01/0400040701_4004_014558.gif',
        name: '박은태',
    },
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Artist_Image_Sonnet_Son%28Seung-yeon_Son%29.jpg/250px-Artist_Image_Sonnet_Son%28Seung-yeon_Son%29.jpg',
        name: '손승연',
    },
    {
        imageUri: 'https://img.hankyung.com/photo/201608/BF.12343403.1.jpg',
        name: '정선아',
    },
    {
        imageUri: 'https://d7p29s5ird9zx.cloudfront.net/upFiles/StageTalkV2/Editor/2019/3/8/20190308040829c6275cea965f4689a711842900103d24.jpg',
        name: '최재림2',
    },
    {
        imageUri: 'http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/07/01/0400040701_4004_014558.gif',
        name: '박은태2',
    },
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Artist_Image_Sonnet_Son%28Seung-yeon_Son%29.jpg/250px-Artist_Image_Sonnet_Son%28Seung-yeon_Son%29.jpg',
        name: '손승연2',
    },
    {
        imageUri: 'https://img.hankyung.com/photo/201608/BF.12343403.1.jpg',
        name: '정선아2',
    },
]

const Stories = () => {
    return (
        <FlatList
            data = {data}
            keyExtractor={({name}) => name}
            horizontal
            showsHorizontalScrollIndicator = {false}
            style={styles.container}
            renderItem = {({item})=> <Story imageUri={item.imageUri} name={item.name}/>}
        />
    )
}

export default Stories;
