import React, {useState} from 'react';
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalStyles} from '../theme/styles';
import {Text} from 'react-native';

interface Props {
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  error: boolean;
  errorMessage: string | null;
  onChange: (value: string) => void;
}

export const TextInput = ({
  value,
  placeholder,
  secureTextEntry = false,
  error,
  errorMessage,
  onChange,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(secureTextEntry);

  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          !error
            ? globalStyles.textInput
            : {...globalStyles.textInput, borderColor: 'red'},
        ]}>
        <RNTextInput
          placeholder={placeholder}
          style={{flex: 1}}
          onChangeText={value => onChange(value)}
          value={value}
          secureTextEntry={showPassword}
        />
        {secureTextEntry ? (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Icon name="visibility" size={25} />
            ) : (
              <Icon name="visibility-off" size={25} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {error ? (
        <Text style={{fontSize: 12, marginLeft: 10, color: 'red'}}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
