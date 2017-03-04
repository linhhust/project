import {LOAD_LIST} from './types';

export const loadData = () => {
    return (dispatch) => {
        fetch('http://45.117.160.28:3330/tasks')
        .then((response) => response.json())
        .then((response) => {
            console.log('loadData', response.data);
            dispatch({
                type: LOAD_LIST,
                payload: response.data
            });
        })
        .catch();
    };
};
