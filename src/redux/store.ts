import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './slices/auth.slice';
import {todoSlice} from './slices/todo.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todo: todoSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user:AuthState}
export type AppDispatch = typeof store.dispatch;
