import {todoAPI} from '../api/api';
import {LoginResponse} from '../types';
export const login = async (user: string, password: string) => {
  try {
    const {data} = await todoAPI.post<LoginResponse>('/auth/login', {
      user,
      password,
    });
    return data;
  } catch (error: any) {
    throw error;
  }
};
