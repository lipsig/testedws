import { combineReducers } from 'redux';
import { GET_DATA_FIRST, REQUEST_DATA  } from '../actions';
import { GET_DATA_FIRST2, REQUEST_DATA2 } from '../actions/band';

const initialState = {
  isFetching: false,
  isFetching2: false,
  myData: [],
  bandInternal: []
};
 
const things = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      };
    case GET_DATA_FIRST:
      return {
        ...state,
        isFetching: false,
        myData: action.myData
      };
    default:
      return state;
  }
};

const band = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA2:
      return {
        ...state,
        isFetching2: true
      };
    case GET_DATA_FIRST2:
      return {
        ...state,
        isFetching2: false,
        bandInternal: action.bandInternal
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  things,
  band
});

export default rootReducer;