module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@babel/eslint-parser', // 指定使用 Babel 解析器
  parserOptions: {
    requireConfigFile: false, // 这句话通常会解决你当前的问题
    babelOptions: {

    },
  },
};
