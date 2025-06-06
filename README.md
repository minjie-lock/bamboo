# BAMBOO

Bamboo 集成 tailwincss 样式和自动引入基础组件

## 差异

## 集成 tailwindcss 样式

使用 NativeWind 集成 tailwindcss 样式

```tsx
<View className="flex-row"></View>
```

## 集成基础组件

不用引入组件自动转换引入组件，剔除繁琐的组件引入

```tsx
<view> -> <View>
<text> -> <Text>
```

### 编码体验

```tsx
<view>
  <text>Hello World</text>
</view>
```

## 安装
```bash
npm install @bamboo/core
```

