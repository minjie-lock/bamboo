
import {
  Button as NButton,
  ButtonProps as NButtonProps,
  View
} from 'react-native'

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
}

export default function Button(props: ButtonProps){
  return (
    <View className="">

    </View>
  )
}