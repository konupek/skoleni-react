import { NAVIGATE } from '../types/constants';
import NavigationContainer from '../containers/NavigationContainer';
import { NavigationActions } from 'react-navigation';

export default (state, action) => {
  switch (action.type) {
    case NAVIGATE:
      return NavigationContainer.router.getStateForAction(NavigationActions.navigate({ routeName: action.screen }), state);
    default:
      return NavigationContainer.router.getStateForAction(action, state);
  }
}
