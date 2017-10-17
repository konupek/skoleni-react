import { FB_LOGIN, NAVIGATE } from '../types/constants';

export const fbLogin = () => {
	return { type: FB_LOGIN }
};

export const navigate = (screen) => {
  return {type: NAVIGATE, screen}
}