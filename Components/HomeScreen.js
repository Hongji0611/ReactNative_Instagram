import React from 'react';
import { SafeAreaView } from 'react-native';
import Feed from './Feed/index';

function HomeScreen(){
    return(
        <SafeAreaView>
            <Feed/>
        </SafeAreaView>
    );
}

export default HomeScreen;