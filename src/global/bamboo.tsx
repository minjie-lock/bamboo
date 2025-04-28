import { lazy } from 'react';
import babylon from '@babel/parser';
import { transformSync } from '@babel/core'

import {
  Text,
  View,
  ScrollView,
} from 'react-native';

const bamboo = {
  view: lazy(async () => {
    const native = await import('react-native');
    return {
      default: native.View,
    };
  }),
  text: lazy(async () => {
    const native = await import('react-native');
    return {
      default: native.Text,
    };
  }),
  scroll: ScrollView,
};

export default bamboo;

const transform = (file: { filename: string, src: string }) => {
  // const ast = babylon.parse(file.src, {sourceType: 'module'});

  // return {ast};

  return transformSync(file.src, {
    
  })
};
