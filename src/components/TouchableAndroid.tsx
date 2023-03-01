import React from 'react';
import {
  StyleProp,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  children: JSX.Element;
  rippleBackground?: string;
  rippleRadius?: number;
  containerStyles?: StyleProp<ViewStyle>;
  onPress?: Function;
}

export const TouchableAndroid = ({
  children,
  rippleBackground = '#bfbfbf',
  rippleRadius = 20,
  containerStyles = {},
  onPress = () => {},
}: Props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => onPress()}
      background={TouchableNativeFeedback.Ripple(
        rippleBackground,
        false,
        rippleRadius,
      )}>
      <View style={containerStyles}>{children}</View>
    </TouchableNativeFeedback>
  );
};
