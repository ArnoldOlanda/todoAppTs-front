import {todoAPI} from '../api/api';
import {UserResponse} from '../types';
export const login = async (user: string, password: string) => {
  try {
    const {data} = await todoAPI.post<UserResponse>('/auth/login', {
      user,
      password,
    });
    return data;
  } catch (error: any) {
    throw error;
  }
};
