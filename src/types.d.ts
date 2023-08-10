export type Validation = [(value: any) => boolean, string];

export interface UserResponse {
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

export interface TodoResponse {
  ok: boolean;
  todos: Todo[];
}

interface Todo {
  id: number;
  title: string;
  description: string;
  date: Date;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddTodoResponse {
  title: string;
  description: string;
  date: Date;
  user: User;
  category: Category;
  id: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  id: number;
  category: string;
  createdAt: string;
  updatedAt: string;
}
