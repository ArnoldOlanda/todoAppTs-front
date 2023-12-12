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
  date: Date;
  status: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
}

export interface AddTodoResponse {
  id: number;
  title: string;
  date: Date;
  user: User;
  category: Category;
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
