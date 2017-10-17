import { FB_LOGIN, NAVIGATE, ADD_TIMELINE_RECORD } from '../types/constants';

export const fbLogin = () => {
	return { type: FB_LOGIN }
};

export const navigate = (screen) => {
  return {type: NAVIGATE, screen}
}

export const addTimelineRecord = () => {
	return {type: ADD_TIMELINE_RECORD}
}