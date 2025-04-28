module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript"
  ],
  plugins: [
    'nativewind/babel',
    '@babel/plugin-syntax-decorators',
    [
      '@babel/plugin-proposal-decorators',
      {
        'legacy': true,
      }
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@": "./src",
        }
      }
    ]
  ]
};