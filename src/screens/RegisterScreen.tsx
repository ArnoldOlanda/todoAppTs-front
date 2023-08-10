import React from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {globalStyles} from '../theme/styles';
import {useRegisterStore} from '../hooks/useRegisterStore';
import {RegisterIlustration} from '../components/RegisterIlustration';
import {TextInput} from '../components/TextInput';
import {Button} from '../components/Button';

// interface Props extends StackScreenProps<any> {}

export const RegisterScreen = () => {
  const {
    confirmPassword,
    formState,
    formSubmited,
    formValidation,
    handlePressRegister,
    loading,
    onInputTextChange,
    setConfirmPassword,
  } = useRegisterStore();
  const {nameValid, userValid, passwordValid} = formValidation;

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
          value={formState.password}
          placeholder="password"
          onChange={value => onInputTextChange('password', value)}
          error={!!userValid && formSubmited}
          errorMessage={passwordValid}
          secureTextEntry
        />
        <TextInput
          value={confirmPassword}
          placeholder="confirmPassword"
          onChange={value => setConfirmPassword(value)}
          error={
            formState.password !== confirmPassword &&
            confirmPassword.length >= 1
          }
          errorMessage={'The passwords no match'}
          secureTextEntry
        />
        <View style={{height: 20}} />
        <Button
          onPress={handlePressRegister}
          title="Register"
          isLoading={loading}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
