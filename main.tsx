import {
  createStaticNavigation,
} from '@react-navigation/native';
import BottomTabNavigator from './src/routers';
import React from 'react';
import bamboo from './src/global/bamboo';
import { Configuration } from  './src/components/design/components'
import './global.css';

global.bamboo = bamboo;

const StaticNavigation = createStaticNavigation(BottomTabNavigator);

export default function Root() {

  return (
    <Configuration>
      <StaticNavigation />
    </Configuration>
  );
}
