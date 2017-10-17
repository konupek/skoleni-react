import { NAVIGATE } from '../types/constants';
import NavigationContainer from '../containers/NavigationContainer';

export default (state, action) => {
  switch (action.type) {
    case NAVIGATE:
      console.log('Navigate to:', action.screen);
      return NavigationContainer.router.getStateForAction(action, state);
    default:
      return NavigationContainer.router.getStateForAction(action, state);
  }
}
