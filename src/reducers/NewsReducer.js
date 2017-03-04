import {LOAD_LIST} from '../actions/types';

const INITIAL = [];

export default newsReducer = (state = INITIAL, action)=>{
  switch (action.type) {
  	case LOAD_LIST:
  		return action.payload;
    default:
      return state;
  }
}
