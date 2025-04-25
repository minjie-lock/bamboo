
import { useRef } from 'react';
import {
  Animated,
  ButtonProps as NButtonProps,
  ViewStyle
} from 'react-native'
import { useConfiguration } from '../configuration';

type ButtonProps = {
  /**
   * 是否块级元素
  */
  block?: boolean;
  /**
   * 按钮颜色
  */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /**
   * 是否禁用
  */
  disabled?: boolean;
  /**
   * 填充模式
  */
  fill?: 'solid' | 'outline' | 'none';
  /**
   * 是否处于加载状态，'auto' 模式会监听 onClick 的 Promise 状态自动更新 loading
  */
  loading?: boolean;
  /**
   * 加载状态下的 icon 图标
  */
  loadingIcon?: React.ReactNode;
  /**
   * 加载状态下额外展示的文字
  */
  loadingText?: string;
  /**
   * 触摸事件
  */
  onPress?: NButtonProps['onPress'];
  /**
   * 按钮形状
  */
  shape?: 'default' | 'rounded' | 'rectangular';
  /**
   * 大小
  */
  size?: 'mini' | 'small' | 'middle' | 'large';
  /**
   * 
  */
  children?: React.ReactNode;
};

const height = {
  mini: 26,
  small: 30,
  middle: 40,
  large: 50,
};

export default function Button(props: ButtonProps){

  const {
    children,
    size = 'middle',
    block = false,
    shape = 'default',
    color = 'primary',
    fill = 'solid',
  } = props;


  const animated = useRef(new Animated.Value(0)).current;

  const button = useConfiguration(configuration => {
    return configuration.scheme?.components.button;
  });

  const radius = {
    default: button?.round,
    rectangular: 0,
    rounded: '30%'
  };

  const background = {
    none: {
      backgroundColor: 'none',
      color: button?.color[color],
    },
    solid: {
      backgroundColor: button?.color[color],
      color: '#fff'
    },
    outline: {
      backgroundColor: 'none',
      color: button?.color[color],
      borderWidth: 1,
      borderColor: button?.color[color]
    }
  }

  const style: ViewStyle = {
    width: block ? '100%' : 'auto',
    height: height[size],
    borderRadius: radius[shape],
    ...background[fill],
  };

  return (
    <Animated.View style={style}>
      {children}
    </Animated.View>
  )
}