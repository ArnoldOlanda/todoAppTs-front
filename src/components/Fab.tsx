import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  onPress: () => void;
}

export const Fab = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      activeOpacity={0.5}
      onPress={() => onPress()}>
      <Icon name="add" size={40} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#6887F6',
    borderRadius: 50,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    elevation: 4,
  },
});
