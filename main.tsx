import {
  createStaticNavigation,
} from '@react-navigation/native';
import BottomTabNavigator from './src/routers';
import React from 'react';
import './global.css';
import bamboo from './src/global/bamboo';

global.bamboo = bamboo;

const StaticNavigation = createStaticNavigation(BottomTabNavigator);

export default function Root() {

  return (
    <StaticNavigation />
  );
}
