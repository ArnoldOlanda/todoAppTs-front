import React, {useState} from 'react';
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalStyles} from '../theme/styles';

interface Props {
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  error: boolean;
  errorMessage: string | null;
  multiline?: boolean;
  icon?: JSX.Element | null;
  style?: StyleProp<ViewStyle>;
  onPressIcon?: Function;
  onChange: (value: string) => void;
}

export const TextInput = ({
  value,
  placeholder,
  secureTextEntry = false,
  multiline = false,
  icon,
  onPressIcon,
  error,
  errorMessage,
  onChange,
  style = {},
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(secureTextEntry);

  return (
    <View style={{alignItems: 'center', width: '100%', ...(style as object)}}>
      <View
        style={[
          styles.inputContainer,
          !multiline
            ? !error
              ? globalStyles.textInput
              : {...globalStyles.textInput, borderColor: 'red'}
            : !error
            ? {
                ...globalStyles.textInput,
                height: 100,
              }
            : {
                ...globalStyles.textInput,
                height: 100,
                borderColor: 'red',
              },
        ]}>
        <RNTextInput
          placeholder={placeholder}
          style={[
            {flex: 1},
            multiline
              ? {
                  textAlignVertical: 'top',
                  height: '100%',
                }
              : {},
          ]}
          onChangeText={value => onChange(value)}
          value={value}
          multiline={multiline}
          numberOfLines={2}
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
        {icon && onPressIcon ? (
          <TouchableOpacity onPress={() => onPressIcon()}>
            {icon}
          </TouchableOpacity>
        ) : null}
      </View>
      {error ? (
        <View style={{width: '100%'}}>
          <Text
            style={{
              fontSize: 12,
              marginHorizontal: 15,
              color: 'red',
              textAlign: 'left',
            }}>
            {errorMessage}
          </Text>
        </View>
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
