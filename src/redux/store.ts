import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './slices/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user:AuthState}
export type AppDispatch = typeof store.dispatch;
