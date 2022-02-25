import axios from 'axios';
import {
  GET_FEED_POSTS_LOADING,
  GET_FEED_POSTS_SUCCESS,
  GET_FEED_POSTS_FAILED,
  POST_LIKED,
  POST_UNLIKED,
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

export const postLiked = (post, liked) => dispatch => {
  if (liked === true) {
    dispatch({
      type: POST_UNLIKED,
      payload: post,
    });
  } else {
    dispatch({
      type: POST_LIKED,
      payload: post,
    });
  }
};
