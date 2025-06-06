import { AppRegistry } from 'react-native';
import Root from './root';
import { name } from './app.json';

AppRegistry.registerComponent(
  name,
  () => Root
);
