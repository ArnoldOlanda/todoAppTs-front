import {User} from '../models/user.model';
import {UserResponse} from '../types';

export const adaptedUser = (user: UserResponse): User => ({
  id: user.user.id,
  name: user.user.name,
  user: user.user.user,
  token: user.token,
});
