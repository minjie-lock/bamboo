module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@babel/eslint-parser', // 指定使用 Babel 解析器
  parserOptions: {
    requireConfigFile: false, // 这句话通常会解决你当前的问题
    babelOptions: {
      // 如果你的 metro.config.js 使用了特殊的 Babel 配置，可以在这里指定
      // presets: ['module:metro-react-native-babel-preset'],
      // plugins: [],
    },
  },
};
