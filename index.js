import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);//忽略ismounted黄色报警
AppRegistry.registerComponent('XinChat', () => App);
