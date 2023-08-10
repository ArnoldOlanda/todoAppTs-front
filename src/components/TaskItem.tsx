import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Todo} from '../models/todo.model';
import {formatedTime} from '../utilities/formatedTime';
import {useCompleteTodo} from '../hooks/useCompleteTodo';

interface Props {
  todo: Todo;
}

export const TaskItem = ({todo}: Props) => {
  const {handleCheckTodo, handleDeleteTodo, checked, date, title} =
    useCompleteTodo(todo);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: checked ? '#eee' : '#fff',
        elevation: checked ? 0 : 2,
      }}>
      <BouncyCheckbox
        size={25}
        text={title}
        isChecked={checked}
        // disabled={checked}
        fillColor="#0071F2"
        unfillColor="#FFFFFF"
        innerIconStyle={{borderWidth: 2}}
        textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={handleCheckTodo}
        onLongPress={() => handleDeleteTodo(todo.id)}
        style={{flex: 1}}
      />
      <Text style={{fontSize: 16, color: '#0071F2'}}>{formatedTime(date)}</Text>
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
