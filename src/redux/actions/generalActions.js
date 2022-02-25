import axios from 'axios';
import {
  GET_FEED_POSTS_LOADING,
  GET_FEED_POSTS_SUCCESS,
  GET_FEED_POSTS_FAILED,
} from './actionTypes';

const baseUrl = 'https://fakestoreapi.com/products';

export const getFeedPosts = () => async dispatch => {
  try {
    dispatch({
      type: GET_FEED_POSTS_LOADING,
    });
    const res = await axios.get(`${baseUrl}`);
    dispatch({
      type: GET_FEED_POSTS_SUCCESS,
      payload: res?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_FEED_POSTS_FAILED,
    });
  }
};
