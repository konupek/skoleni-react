import { StackNavigator } from 'react-navigation';

import HomeScreenContainer from './HomeScreenContainer';
import TimelineScreenContainer from './TimelineScreenContainer';
import CameraScreenContainer from './CameraScreenContainer';

export default StackNavigator(
  {
    Home: { screen: HomeScreenContainer },
    Timeline: {screen: TimelineScreenContainer},
    Camera: {screen: CameraScreenContainer}
  },
  {
    initialRouteName: 'Home',
  },
);
