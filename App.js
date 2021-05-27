
import React from 'react';
// import 'react-native-gesture-handler';
import HomeScreen from './Components/HomeScreen';
import DiscoveryScreen from './Components/DiscoveryScreen';
import CreatePostScreen from './Components/CreatePostScreen';
import NotificationScreen from './Components/NotificationScreen';
import ProfileScreen from './Components/ProfileScreen';
import logo from './Components/assets/images/logo.png';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image
} from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'native-base';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title:"Instagram",
          headerStyle: { },
          headerLeft: () => (
              <Ionicons name="camera-outline" size={30} color={"#000"} style={{marginLeft: 10}}/>
          ),
          headerTitle: () => (
            <Image source={logo} resizeMode="contain" style= {{ alignSelf: 'center', width: 135, marginTop: 10 }} />
            // <Ionicons name="paper-plane-outline" size={30} color={"#000"} style={{marginRight: 10}}/>
            ),
          headerRight: () => (
            <Ionicons name="paper-plane-outline" size={30} color={"#000"} style={{marginRight: 10}}/>
          )
        }}
        />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
        name="Home" 
        component={ProfileScreen}
        options={{
          title:"hong_zi_woo",
          headerStyle: { },
          headerRight: () => (
            <View style={{flexDirection: "row",}}>
              <Ionicons name="ios-add-circle-outline" size={30} color={"#000"} style={{marginRight: 10}}/>
              <Ionicons name="menu" size={30} color={"#000"} style={{marginRight: 10}}/>
            </View>
          )
        }}
        />
    </ProfileStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content"/>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home-sharp'
                : 'ios-home-outline';
            } else if (route.name === 'Discovery') {
              iconName = focused ? 'search' : 'search-outline';
            } else if(route.name == 'Post'){
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if(route.name == 'Notification'){
              iconName = focused ? 'heart-sharp' : 'heart-outline';
            } else if(route.name == 'Profile'){
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;