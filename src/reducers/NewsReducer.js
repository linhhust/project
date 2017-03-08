import {LOAD_LIST, LOAD_NEWS,FETCH_PENDING,FETCH_SUCCESS,FETCH_FAILURE} from '../actions/types';

const INITIAL = {
  isFetching: false,
  error: null,
  data: []
};

export default newsReducer = (state = INITIAL, action)=>{
  switch (action.type) {
  	case FETCH_PENDING:
  		return {...state, isFetching: true, error: null};
    case FETCH_SUCCESS:
      return {...state, isFetching:false, error:null};
    case FETCH_FAILURE:
      return {...state, isFetching:false, error:action.error};
    case 'ADD_NEWS': {
      //console.log(state);
      let data = [...state.data, action.payload];
      return {...state, data: data, isFetching:false}
    }
    default:
      return state;
  }
}
