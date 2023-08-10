import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {Validation} from '../types';
import {useForm} from './useForm';
import {useFetchAndLoad} from './useFetchAndLoad';
import {register} from '../services/register.service';
import {setAuth} from '../redux/slices/auth.slice';
import {adaptedUser} from '../adapters/user.adapter';

interface InitialState {
  name: string;
  user: string;
  password: string;
}

const initialState: InitialState = {
  name: '',
  user: '',
  password: '',
};

const validations: Record<keyof InitialState, Validation> = {
  name: [(value: string) => value.length >= 1, 'Este campo es obligatorio'],
  user: [(value: string) => value.length >= 1, 'Este campo es obligatorio'],
  password: [(value: string) => value.length >= 1, 'Este campo es obligatorio'],
};

export const useRegisterStore = () => {
  const dispatch = useDispatch();
  const {formState, formValidation, isFormValid, onInputTextChange} = useForm(
    initialState,
    validations,
  );

  const {loading, callEndpoint} = useFetchAndLoad();

  const [formSubmited, setFormSubmited] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const {name, user, password} = formState;

  const registerNewUser = async () => {
    try {
      const {data} = await callEndpoint(register(name, user, password));
      dispatch(setAuth(adaptedUser(data)));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePressRegister = async () => {
    setFormSubmited(true);
    if (!isFormValid || password !== confirmPassword) {
      return ToastAndroid.show(
        'Revise la informacion ingresada',
        ToastAndroid.SHORT,
      );
    }

    registerNewUser();
  };
  return {
    confirmPassword,
    formState,
    formSubmited,
    formValidation,
    handlePressRegister,
    loading,
    onInputTextChange,
    setConfirmPassword,
  };
};
