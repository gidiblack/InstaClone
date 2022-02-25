import {
  GET_FEED_POSTS_SUCCESS,
  GET_FEED_POSTS_FAILED,
  GET_FEED_POSTS_LOADING,
  POST_LIKED,
  POST_UNLIKED,
} from '../actions/actionTypes';

const initialState = {
  feedPosts: [],
  feedLoading: false,
  likedPosts: [],
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
    case POST_LIKED:
      return {
        ...state,
        likedPosts: [...state.likedPosts, payload],
      };
    case POST_UNLIKED:
      return {
        ...state,
        likedPosts: state.likedPosts.filter(post => post !== payload),
      };
    default:
      return state;
  }
}
