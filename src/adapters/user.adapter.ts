import {User} from '../models/user.model';
import {LoginResponse} from '../types';

export const adaptedUser = (user: LoginResponse): User => ({
  id: user.user.id,
  name: user.user.name,
  user: user.user.user,
  token: user.token,
});
