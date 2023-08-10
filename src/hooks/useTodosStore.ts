import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFetchAndLoad} from './useFetchAndLoad';
import {RootState} from '../redux/store';
import {getTodosToday} from '../services/getTodosToday.service';
import {setTodos} from '../redux/slices/todo.slice';
import {adaptedTodos} from '../adapters/todos.adapters';
import {useRefreshControl} from './useRefreshControl';

export const useTodosStore = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.auth);
  const {loading, callEndpoint} = useFetchAndLoad();
  const {onRefresh, refreshing} = useRefreshControl(
    () => callEndpoint(getTodosToday(user!.id)),
    setTodos,
    adaptedTodos,
  );

  const loadTodos = async () => {
    try {
      const {data} = await callEndpoint(getTodosToday(user!.id));
      dispatch(setTodos(adaptedTodos(data)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return {
    loading,
    refreshing,
    onRefresh,
  };
};
