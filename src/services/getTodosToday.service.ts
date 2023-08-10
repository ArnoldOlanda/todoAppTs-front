import {todoAPI} from '../api/api';
import {TodoResponse} from '../types';
export const getTodosToday = (id: number) => {
  const controller = new AbortController();

  return {
    call: todoAPI.get<TodoResponse>(`/todos/today/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
