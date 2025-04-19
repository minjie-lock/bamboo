import React from 'react';
import { ScrollViewProps, TextProps, ViewProps } from 'react-native';

declare global {
  /**
   * @interface 颜色
  */
  interface COLOR {
    background: string;
  }

  const bamboo: {
    view: React.FC<ViewProps>;
    text: React.FC<TextProps>;
    scroll: ScrollViewProps;
  };
}

export { };
