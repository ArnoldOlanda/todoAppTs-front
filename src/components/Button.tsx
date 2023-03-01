import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface Props {
  onPress: () => void;
  title: string;
  isLoading: boolean;
}

export const Button = ({onPress, title, isLoading = false}: Props) => {
  return (
    <TouchableOpacity style={styles.getStartedBtn} onPress={() => onPress()}>
      <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
        {isLoading ? <ActivityIndicator color="#fff" /> : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  getStartedBtn: {
    backgroundColor: '#6887F6',
    borderRadius: 20,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
