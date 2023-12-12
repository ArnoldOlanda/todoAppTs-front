import {Todo} from '../models/todo.model';
import {TodoResponse} from '../types';

export const adaptedTodos = (todos: TodoResponse): Todo[] => {
  return todos.todos.map(todo => ({
    id: todo.id,
    title: todo.title,
    date: todo.date,
    status: todo.status,
    category: todo.category,
  }));
};
