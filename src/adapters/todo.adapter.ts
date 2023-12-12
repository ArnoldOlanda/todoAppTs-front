import {Todo} from '../models/todo.model';
import {AddTodoResponse} from '../types';

export const adaptedTodo = (todo: AddTodoResponse): Todo => {
  return {
    id: todo.id,
    title: todo.title,
    date: todo.date,
    status: todo.status,
    category: todo.category,
  };
};
