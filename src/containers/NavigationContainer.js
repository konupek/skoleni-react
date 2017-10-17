import { StackNavigator } from 'react-navigation';

import HomeScreenContainer from './HomeScreenContainer';
import TimelineScreenContainer from './TimelineScreenContainer'; 

export default StackNavigator(
  {
    Home: { screen: HomeScreenContainer },
    Timeline: {screen: TimelineScreenContainer},
  },
  {
    initialRouteName: 'Home',
  },
);
