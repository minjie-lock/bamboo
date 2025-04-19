import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";

import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import { BottomTabs } from '../components';


const BottomTabNavigator = createBottomTabNavigator({
  screenOptions: {
    animation: 'fade',
  },
  tabBar: (props) => <BottomTabs {...props} />,
  screens: {
    Home,
  },
});

export default BottomTabNavigator;
