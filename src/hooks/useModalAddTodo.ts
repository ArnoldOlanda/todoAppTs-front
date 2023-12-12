import {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../redux/store';
import {setTodo} from '../redux/slices/todo.slice';
import {useForm} from './useForm';
import {useFetchAndLoad} from './useFetchAndLoad';
import {Validation} from '../types';
import {addTodo} from '../services/addTodo.service';
import {adaptedTodo} from '../adapters/todo.adapter';
import {formatedTime} from '../utilities/formatedTime';

interface InitialState {
  title: string;
  category: number;
  date: string;
  time: string;
}

const validations: Record<keyof InitialState, Validation> = {
  title: [(value: string) => value.length >= 1, 'El titulo es obligatorio'],
  category: [(value: number) => value > 0, 'Selecciona una categoria'],
  date: [(value: string) => value.length >= 1, 'Escoge una fecha valida'],
  time: [(value: string) => value.length >= 1, 'Escoge una hora valida'],
};

const initialState: InitialState = {
  title: '',
  date: '',
  category: 0,
  time: '',
};

type ModePicker = 'date' | 'time';

export const useModalAddTodo = ({closeModal}: {closeModal: Function}) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.auth);

  const [formSubmited, setFormSubmited] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  const {loading, callEndpoint} = useFetchAndLoad();
  const {
    formState,
    formValidation,
    isFormValid,
    onInputTextChange,
    onResetForm,
  } = useForm(initialState, validations);

  const showMode = (currentMode: ModePicker) => {
    DateTimePickerAndroid.open({
      value: date || new Date(),
      onChange: (event, currentDate) => {
        setDate(currentDate!);
        if (currentMode === 'date') {
          onInputTextChange('date', currentDate!.toLocaleDateString());
        } else {
          onInputTextChange('time', formatedTime(currentDate || new Date()));
        }
      },
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => showMode('date');

  const showTimepicker = () => showMode('time');

  const handlePressAdd = async () => {
    setFormSubmited(true);
    if (!isFormValid) {
      return ToastAndroid.show(
        'Revise la informacion ingresada',
        ToastAndroid.LONG,
      );
    }
    addNewTodo();
    closeModal();
    onResetForm();
    setFormSubmited(false);
  };

  const addNewTodo = async () => {
    // console.log(formState);
    const todoData = {
      ...formState,
      date,
      idUser: user!.id,
      idCategory: formState.category,
    };
    try {
      const {data} = await callEndpoint(addTodo(todoData));
      dispatch(setTodo(adaptedTodo(data)));
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return {
    formState,
    formValidation,
    formSubmited,
    handlePressAdd,
    isFormValid,
    onInputTextChange,
    showDatepicker,
    showTimepicker,
  };
};
