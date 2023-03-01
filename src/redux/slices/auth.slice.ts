import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../models/user.model';

interface InitialAuthState {
  status: 'not-authenticated' | 'authenticated';
  user: User | null;
  isLoading: boolean;
  errorMessage: string | null;
}

const initialState: InitialAuthState = {
  status: 'not-authenticated',
  user: null,
  isLoading: false,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoading: state => {
      state.isLoading = true;
    },
    setAuth: (state, {payload}) => ({
      isLoading: false,
      status: 'authenticated',
      user: payload,
      errorMessage: null,
    }),
    setErrorMessage: (state, {payload}) => ({
      ...state,
      isLoading: false,
      errorMessage: payload,
    }),
    logout: state => ({
      ...state,
      status: 'not-authenticated',
      user: null,
      errorMessage: null,
    }),
  },
});

export const {setIsLoading, setAuth, setErrorMessage, logout} =
  authSlice.actions;
