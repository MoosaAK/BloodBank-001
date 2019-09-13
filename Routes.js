import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from './containers/HomeScreen/Home'
import AuthScreen from './containers/AuthScreen/index'
import ViewDonor from './ViewDonors'
import BeDonor from './BeDonor'
import CameraExample from './Camera'
import Preview from './Preview'
import Search from './Search'


const Authnavigator = createStackNavigator({
    AuthScreen: {
        screen: AuthScreen,
        navigationOptions: {
            header: null
        }
    },
   
        
},
    { initialRouteName: 'AuthScreen' }
);


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Dashboard',
          }
    },
    ViewDonor: {
        screen: ViewDonor,
        navigationOptions: {
            title: 'All Donors',
          }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search',
          }
    },
    BeDonor: {
        screen: BeDonor,
        navigationOptions: {
            title: 'Be a Donor',
          }
    },
    CameraExample: {
        screen: CameraExample,
        navigationOptions: {
           header:null
          },
    },
    Preview: {
        screen: Preview,
        navigationOptions: {
            header:null
           },
    },
},
    { initialRouteName: 'Home' }
);



export default createAppContainer(createSwitchNavigator(
    {
        Auth: Authnavigator,
        App: AppNavigator,
    },
    {
        initialRouteName: 'Auth',
    }
));