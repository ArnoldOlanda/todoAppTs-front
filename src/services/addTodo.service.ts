import {todoAPI} from '../api/api';
import {AddTodoResponse} from '../types';

interface NewTodo {
  title: string;
  description: string;
  date: Date | undefined;
  idUser: number;
  idCategory: number;
}

export const addTodo = (todo: NewTodo) => {
  const controller = new AbortController();
  return {
    call: todoAPI.post<AddTodoResponse>('/todos', {
      ...todo,
      signal: controller.signal,
    }),
    controller,
  };
};
