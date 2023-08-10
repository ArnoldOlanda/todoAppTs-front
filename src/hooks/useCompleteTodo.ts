import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {Todo} from '../models/todo.model';
import {useFetchAndLoad} from './useFetchAndLoad';
import {completeTodoService} from '../services/completeTodo.service';
import {checkTodo, uncheckTodo} from '../redux/slices/todo.slice';
import {uncompleteTodoService} from '../services/uncompleteTodo.service';

export const useCompleteTodo = (todo: Todo) => {
  const dispatch = useDispatch();
  const {status, date, title} = todo;
  const {loading, callEndpoint} = useFetchAndLoad();
  const [checked, setChecked] = useState(status !== 'pending');

  const handleCheckTodo = (isChecked: boolean) => {
    if (isChecked) {
      //Actualizar bd
      completeTodo();
    } else {
      uncompleteTodo();
    }
    setChecked(isChecked);
  };

  const handleDeleteTodo = (id: number) => {
    try {
      Alert.alert('Eliminar', 'Eliminar tarea?', [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: () => {
            // Aquí puedes realizar alguna acción si el usuario presiona "Sí"
            console.log('Tarea eliminada');
          },
        },
      ]);
    } catch (error) {}
  };

  const completeTodo = async () => {
    try {
      const {data} = await callEndpoint(completeTodoService(todo.id));
      dispatch(checkTodo(data.todo));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const uncompleteTodo = async () => {
    try {
      const {data} = await callEndpoint(uncompleteTodoService(todo.id));
      dispatch(uncheckTodo(data.todo));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    checked,
    setChecked,
    date,
    handleCheckTodo,
    handleDeleteTodo,
    title,
  };
};
