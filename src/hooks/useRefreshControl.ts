//@ts-check
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AxiosCall} from '../models/axiosCall.model';

export const useRefreshControl = (
  axiosCall: () => Promise<any>,
  reduxActionReducer: Function,
  adapterFunction: Function,
) => {
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      //   dispatch(reduxLoadingReducer());

      const {data} = await axiosCall();

      dispatch(reduxActionReducer(adapterFunction(data)));
      setRefreshing(false);
    } catch (error) {
      console.log(error);
      setRefreshing(false);
    }
  };

  return {
    refreshing,
    onRefresh,
  };
};
