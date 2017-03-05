import {LOAD_LIST, LOAD_NEWS } from './types';
import API from '../api';
export const loadData = () => {
    return (dispatch) => {
        new API().getList('beststories')
        .then((response) => {
            console.log('loadData', response);
            dispatch({
                type: LOAD_LIST,
                payload: response
            });
        })
        .catch();
    };
};

export const loadNews = (id) =>{
  return dispatch =>{
    new API().getPost(id)
      .then((response) => {
        dispatch({
          type: LOAD_NEWS,
          payload: response
        });
      })
    };
  };
