const { getDefaultConfig, mergeConfig } =  require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = mergeConfig(
  getDefaultConfig(__dirname),
  {
    transformer: () => {
      return {
        
      }
    }
  }
);

module.exports = withNativeWind(config, {
  input: './gloabl.css',
  getCSSForPlatform: (css) => {
    // if (Platform.OS === 'web'){
    //   return css;
    // }
    return Promise.resolve(css);
  }
})
