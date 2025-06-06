module.exports ={
  presets: [
    [
      'module:@react-native/babel-preset',
      { jsxImportSource: 'nativewind' },
    ],
    'nativewind/babel',
  ],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@": "./src",
        }
      }
    ]
  ],
};
