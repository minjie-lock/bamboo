const { withNativeWind } = require('nativewind/metro');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const path = require('path');

const config = mergeConfig(
  getDefaultConfig(__dirname),
  {
    transformer: {
      babelTransformerPath: require.resolve('./metro/transformer.js'),
    },
  }
);

module.exports = withNativeWind(config, {
  input: './src/styles/tailwind.css',
});
