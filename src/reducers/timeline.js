import { ADD_TIMELINE_RECORD } from '../types/constants';

const timelineRecord = {
    imgUrl: 'http://via.placeholder.com/350x150',
    dateTime: new Date()
};

const initialState = {
    records: [timelineRecord]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIMELINE_RECORD:
        return {
            ...state,
            records: [...state.records, timelineRecord]
        }
    default:
        return state;
  }
}
