import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../theme/styles';
import {TaskItem} from './TaskItem';

export const TasksList = () => {
  return (
    <View>
      <Text style={globalStyles.text}>You have 10 task for today</Text>
      <TaskItem completed />
      <TaskItem />
      <TaskItem completed />
      <TaskItem />
    </View>
  );
};
