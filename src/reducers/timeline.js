import { ADD_TIMELINE_RECORD } from '../types/constants';

const initialState = {
	orderNumber: 0,
	timeline: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIMELINE_RECORD:
      	var timelineRecord = {
  			  imgUrl: 'http://via.placeholder.com/350x150',
    		  dateTime: new Date(),
    		  order: state.orderNumber++
		};

      return {...state, 
      		  timeline: [timelineRecord, ...state.timeline]
      		 };
    default:
      return state;
  }
}