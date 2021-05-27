import React from 'react';
import Post from '../Post/index';
import { FlatList } from 'react-native';
import Stories from '../Stories/index';

const data = [
    {
        id: 1,
        user: {
            imageUri: 'https://img.hankyung.com/photo/201608/BF.12343403.1.jpg',
            name: '정선아'
        },
        imageUri: 'http://ticketimage.interpark.com/Play/image/large/21/21000232_p.gif',
        caption: '위키드 곧 개막!',
        likesCount: 1234,
        postedAt: '6 miutes ago',
    },
    {
        id: 2,
        user: {
            imageUri: 'https://img.hankyung.com/photo/201608/BF.12343403.1.jpg',
            name: '정선아'
        },
        imageUri: 'http://ticketimage.interpark.com/Play/image/large/21/21000232_p.gif',
        caption: '위키드 곧 개막!',
        likesCount: 1234,
        postedAt: '6 miutes ago',
    },
    {
        id: 3,
        user: {
            imageUri: 'https://img.hankyung.com/photo/201608/BF.12343403.1.jpg',
            name: '정선아'
        },
        imageUri: 'http://ticketimage.interpark.com/Play/image/large/21/21000232_p.gif',
        caption: '위키드 곧 개막!',
        likesCount: 1234,
        postedAt: '6 miutes ago',
    }
]

const Feed = () => {
    return (
        <FlatList
            data={data}
            ListHeaderComponent={Stories}
            keyExtractor={({id}) => id}
            renderItem={({ item }) => <Post post={item} />}
        />
    );
}

export default Feed;