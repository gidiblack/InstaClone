import {
  GET_FEED_POSTS_SUCCESS,
  GET_FEED_POSTS_FAILED,
  GET_FEED_POSTS_LOADING,
} from '../actions/actionTypes';

const initialState = {
  feedPosts: {},
  feedLoading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FEED_POSTS_SUCCESS:
      return {
        ...state,
        feedPosts: payload,
        feedLoading: false,
      };
    case GET_FEED_POSTS_FAILED:
      return {
        ...state,
        feedLoading: false,
      };
    case GET_FEED_POSTS_LOADING:
      return {
        ...state,
        feedLoading: true,
      };
    default:
      return state;
  }
}
