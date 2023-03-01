import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {Validation} from '../types';
import {useForm} from './useForm';
import {
  setAuth,
  setErrorMessage,
  setIsLoading,
} from '../redux/slices/auth.slice';
import {login} from '../services/login.service';
import {adaptedUser} from '../adapters/user.adapter';

interface InitialState {
  user: string;
  password: string;
}

const validations: Record<keyof InitialState, Validation> = {
  user: [(value: string) => value.length >= 1, 'Este campo es obligatorio'],
  password: [(value: string) => value.length >= 1, 'Este campo es obligatorio'],
};
const initialState = {
  user: '',
  password: '',
};

export const useLoginStore = () => {
  const dispatch = useDispatch();

  const {formState, formValidation, isFormValid, onInputTextChange} = useForm(
    initialState,
    validations,
  );
  const [formSubmited, setFormSubmited] = useState(false);

  const {user, password} = formState;

  const onPressLogin = async () => {
    setFormSubmited(true);
    if (!isFormValid) {
      return ToastAndroid.show(
        'Check the information provided',
        ToastAndroid.SHORT,
      );
    }
    loginUser();
  };

  const loginUser = async () => {
    dispatch(setIsLoading());
    try {
      const data = await login(user, password);
      dispatch(setAuth(adaptedUser(data)));
    } catch (error: any) {
      const {message} = error.response.data;
      dispatch(setErrorMessage(message));
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  };

  return {
    formState,
    formSubmited,
    formValidation,
    onInputTextChange,
    onPressLogin,
  };
};
