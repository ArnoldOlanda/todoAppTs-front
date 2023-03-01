export type Validation = [(value: any) => boolean, string];

export interface LoginResponse {
  ok: boolean;
  user: User;
  token: string;
}

interface User {
  id: number;
  name: string;
  user: string;
  password: string;
  notifToken?: any;
  createdAt: string;
  updatedAt: string;
}
