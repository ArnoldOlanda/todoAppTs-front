import {todoAPI} from '../api/api';

export const completeTodoService = (id: number) => {
  const controller = new AbortController();
  return {
    call: todoAPI.put(`/todos/complete/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
