import {createSlice} from '@reduxjs/toolkit';
import {Todo} from '../../models/todo.model';

interface InitialTodoState {
  todos: Todo[];
  currentTodo: Todo | null;
}

const initialState: InitialTodoState = {
  todos: [],
  currentTodo: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, {payload}) => ({
      ...state,
      todos: payload,
    }),
    setTodo: (state, {payload}) => {
      state.todos.push(payload);
    },
    checkTodo: (state, {payload}) => {
      state.todos = state.todos.map(t => {
        if (t.id === payload.id) {
          return {
            ...t,
            status: 'completed',
          };
        }
        return t;
      });
    },
    uncheckTodo: (state, {payload}) => {
      state.todos = state.todos.map(t => {
        if (t.id === payload.id) {
          return {
            ...t,
            status: 'pending',
          };
        }
        return t;
      });
    },
  },
});

export const {setTodos, setTodo, checkTodo, uncheckTodo} = todoSlice.actions;
