import {LOAD_LIST, LOAD_NEWS} from '../actions/types';

const INITIAL = [];

export default newsReducer = (state = INITIAL, action)=>{
  switch (action.type) {
  	case LOAD_LIST:
  		return action.payload;
    case LOAD_NEWS:
      return action.payload;
    default:
      return state;
  }
}
