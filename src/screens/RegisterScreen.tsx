import React, {useState} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Validation} from '../types';
import {globalStyles} from '../theme/styles';
import {useForm} from '../hooks/useForm';
import {RegisterIlustration} from '../components/RegisterIlustration';
import {TextInput} from '../components/TextInput';
import {Button} from '../components/Button';
import {StackScreenProps} from '@react-navigation/stack';

interface InitialState {
  name: string;
  user: string;
}

const initialState: InitialState = {
  name: '',
  user: '',
};

const validations: Record<keyof InitialState, Validation> = {
  name: [(value: string) => value.length >= 1, 'Este campo es obligatorio'],
  user: [(value: string) => value.length >= 1, 'Este campo es obligatorio'],
};

interface Props extends StackScreenProps<any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {
    formState,
    formValidation,
    setFormValidation,
    isFormValid,
    onInputTextChange,
  } = useForm(initialState, validations);
  const [formSubmited, setFormSubmited] = useState(false);
  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: '',
  });
  const {nameValid, userValid} = formValidation;

  const handlePressRegister = async () => {
    setFormSubmited(true);
    if (!isFormValid) {
      ToastAndroid.show('Revise la informacion ingresada', ToastAndroid.SHORT);
    } else {
      console.log(formState, passwords);
      navigation.navigate('Home');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={globalStyles.containerScreen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{width: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={{marginBottom: 50}}>
          <Text style={{...globalStyles.title, color: '#7fa1fa', fontSize: 30}}>
            Doingly
          </Text>
        </View>
        <RegisterIlustration />
        <Text style={{...globalStyles.title, fontSize: 30, marginVertical: 20}}>
          Register
        </Text>
        <TextInput
          value={formState.name}
          placeholder="name"
          onChange={value => onInputTextChange('name', value)}
          error={!!nameValid && formSubmited}
          errorMessage={nameValid}
        />
        <TextInput
          value={formState.user}
          placeholder="user"
          onChange={value => onInputTextChange('user', value)}
          error={!!userValid && formSubmited}
          errorMessage={userValid}
        />
        <TextInput
          value={passwords.password}
          placeholder="password"
          onChange={value => setPasswords({...passwords, password: value})}
          error={passwords.password.length < 1 && formSubmited}
          errorMessage={'Este campo es obligatorio'}
          secureTextEntry
        />
        <TextInput
          value={passwords.confirmPassword}
          placeholder="confirmPassword"
          onChange={value =>
            setPasswords({...passwords, confirmPassword: value})
          }
          error={
            passwords.confirmPassword !== passwords.password &&
            passwords.confirmPassword.length >= 1
          }
          errorMessage={'Las contraseñas no coinciden'}
          secureTextEntry
        />
        <View style={{height: 20}} />
        <Button onPress={handlePressRegister} title="Register" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
