import {todoAPI} from '../api/api';

export const uncompleteTodoService = (id: number) => {
  const controller = new AbortController();
  return {
    call: todoAPI.put(`/todos/uncomplete/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
