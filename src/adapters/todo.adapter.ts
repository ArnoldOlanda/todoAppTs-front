import {Todo} from '../models/todo.model';
import {AddTodoResponse} from '../types';

export const adaptedTodo = (todo: AddTodoResponse): Todo => {
  return {
    id: todo.id,
    title: todo.title,
    description: todo.description,
    date: todo.date,
    status: todo.status,
  };
};
