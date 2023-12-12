import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Todo} from '../../models/todo.model';
import {formatedTime} from '../../utilities/formatedTime';

interface Props {
  todo: Todo;
}

export const DoneTaskItem = ({todo}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <Icon name="done" size={20} />
        <Text style={styles.titleText}>{todo.title}</Text>
      </View>
      <Text style={styles.timeText}>{formatedTime(todo.date)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
  },
  titleText: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 12,
    color: '#0071F2',
  },
});
