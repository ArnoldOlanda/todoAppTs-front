import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {globalStyles} from '../theme/styles';
import {Button} from '../components/Button';
import {LoginIlustration} from '../components/LoginIlustration';
import {TextInput} from '../components/TextInput';
import {useLoginStore} from '../hooks/useLoginStore';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

interface Props extends StackScreenProps<any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {
    formState,
    formSubmited,
    formValidation,
    onInputTextChange,
    onPressLogin,
  } = useLoginStore();

  const {isLoading} = useSelector((state: RootState) => state.auth);

  const {userValid, passwordValid} = formValidation;

  return (
    <ScrollView>
      <View style={globalStyles.containerScreen}>
        <View style={{marginBottom: 50}}>
          <Text style={{...globalStyles.title, color: '#7fa1fa', fontSize: 30}}>
            Doingly
          </Text>
        </View>
        <LoginIlustration />
        <Text style={{...globalStyles.title, fontSize: 30, marginVertical: 20}}>
          Login
        </Text>
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
          secureTextEntry
          error={!!passwordValid && formSubmited}
          errorMessage={passwordValid}
        />

        <View style={{height: 20}} />
        <Button onPress={onPressLogin} title="Login" isLoading={isLoading} />
        <View style={styles.linkRegisterContainer}>
          <Text style={styles.linkText}>Don´t have a account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                ...styles.linkText,
                fontWeight: 'bold',
                color: '#8B97FF',
                textDecorationLine: 'underline',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linkRegisterContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  linkText: {
    fontSize: 16,
    marginRight: 5,
  },
});
