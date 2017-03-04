import listData from './data'

import {LOAD_LIST} from './types';
export const loadList(){
	return {
		type: LOAD_LIST,
		payload: listData.data
	}
}