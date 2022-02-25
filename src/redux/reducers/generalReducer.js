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
      let feed = [...state.feedPosts];
      let likedPostObj = payload;
      likedPostObj.liked = true;
      likedPostObj.rating.count = likedPostObj.rating.count * 1 + 1;
      return {
        ...state,
        feedPosts: feed.map(post =>
          post.id === payload.id ? likedPostObj : post,
        ),
        likedPosts: [...state.likedPosts, likedPostObj],
      };
    case POST_UNLIKED:
      let unlikedPostObj = payload;
      unlikedPostObj.liked = false;
      unlikedPostObj.rating.count = unlikedPostObj.rating.count * 1 - 1;
      return {
        ...state,
        feedPosts: state.feedPosts.map(post =>
          post.id === payload.id ? unlikedPostObj : post,
        ),
        likedPosts: state.likedPosts.filter(post => post.id !== payload.id),
      };
    default:
      return state;
  }
}
