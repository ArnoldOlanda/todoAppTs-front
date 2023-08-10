import React from 'react';
import {View, Text} from 'react-native';
import {Todo} from '../models/todo.model';
import {globalStyles} from '../theme/styles';
import {TaskItem} from './TaskItem';

interface Props {
  todos: Todo[];
}

export const TasksList = ({todos}: Props) => {
  return (
    <View>
      <Text style={globalStyles.text}>
        You have {todos.length} task for today
      </Text>
      {todos.map(todo => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
    </View>
  );
};
