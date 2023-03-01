import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  completed?: boolean;
}

export const TaskItem = ({completed}: Props) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textDecorationLine: completed ? 'line-through' : 'none',
          flex: 1,
          fontSize: 16,
        }}>
        Daily UI Challenge
      </Text>
      <Text style={{fontSize: 16, color: '#0071F2'}}>9:00 am</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
    height: 60,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ececec',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
