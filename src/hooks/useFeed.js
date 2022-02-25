import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFeedPosts } from '../redux/actions/generalActions';

const useFeed = () => {
  const feedState = useSelector(state => state.generalReducer);
  const dispatch = useDispatch();
  const isLoading = feedState?.feedLoading;
  const feedPosts = feedState?.feedPosts;

  useEffect(() => {
    dispatch(getFeedPosts());
  }, [dispatch]);
  return { feedPosts, isLoading };
};

export default useFeed;
