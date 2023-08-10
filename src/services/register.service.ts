import {todoAPI} from '../api/api';
import {UserResponse} from '../types';

export const register = (name: string, user: string, password: string) => {
  const controller = new AbortController();
  return {
    call: todoAPI.post<UserResponse>('/auth/register', {
      name,
      user,
      password,
      signal: controller.signal,
    }),
    controller,
  };
};
