import {createSlice} from '@reduxjs/toolkit';
import {Todo} from '../../models/todo.model';

interface InitialTodoState {
  todos: Todo[];
  doneTodos: Todo[];
  filteredTodos: Todo[];
  categorySelected: number;
  currentTodo: Todo | null;
  filterApplied: boolean;
}

const initialState: InitialTodoState = {
  todos: [],
  doneTodos: [],
  filteredTodos: [],
  currentTodo: null,
  categorySelected: 0,
  filterApplied: false,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, {payload}) => {
      const doneTodos = payload.filter(
        (todo: Todo) => todo.status === 'completed',
      );
      const undoneTodos = payload.filter(
        (todo: Todo) => todo.status === 'pending',
      );

      return {
        ...state,
        todos: undoneTodos,
        doneTodos,
      };
    },
    setTodo: (state, {payload}) => {
      state.todos.push(payload);
    },
    filterTodos: (state, {payload}) => {
      state.filterApplied = true;
      state.filteredTodos = state.todos.filter(t => t.category.id === payload);
    },
    checkTodo: (state, {payload}) => {
      state.todos = state.todos.filter(todo => todo.id !== payload.id);
      state.doneTodos.push(payload);
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
    clearFilters: state => ({
      ...state,
      filterApplied: false,
    }),
  },
});

export const {
  setTodos,
  setTodo,
  filterTodos,
  checkTodo,
  uncheckTodo,
  clearFilters,
} = todoSlice.actions;
