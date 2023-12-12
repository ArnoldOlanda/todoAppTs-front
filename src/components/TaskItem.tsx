import React, {useRef} from 'react';
import {View, Text, StyleSheet, Alert, Animated} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Todo} from '../models/todo.model';
import {formatedTime} from '../utilities/formatedTime';
import {useCompleteTodo} from '../hooks/useCompleteTodo';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {TouchableAndroid} from './TouchableAndroid';

interface Props {
  todo: Todo;
}

export const TaskItem = ({todo}: Props) => {
  const {handleCheckTodo, handleDeleteTodo, checked, date, title, category} =
    useCompleteTodo(todo);

  //Valores animados
  const animatedValues = {
    opacity: useRef(new Animated.Value(0)).current,
    scale: useRef(new Animated.Value(0)).current,
  };

  const handleAnimatedOut = () => {
    Animated.timing(animatedValues.opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(animatedValues.scale, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) handleCheckTodo(true);
    });
  };

  const handleAnimatedIn = () => {
    Animated.timing(animatedValues.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) animatedValues.opacity.setValue(1);
    });

    Animated.timing(animatedValues.scale, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) animatedValues.scale.setValue(1);
    });
  };

  const animatedStyles = {
    opacity: animatedValues.opacity,
    transform: [
      {
        scale: animatedValues.scale,
      },
    ],
  };

  useEffect(() => {
    handleAnimatedIn();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleAnimatedOut}>
      <Animated.View
        style={[
          {
            ...styles.container,
            backgroundColor: checked ? '#eee' : '#fff',
            // backgroundColor: 'red',
            elevation: checked ? 0 : 2,
          },
          animatedStyles,
        ]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 25,
          }}>
          <BouncyCheckbox
            size={25}
            isChecked={checked}
            fillColor="#0071F2"
            unfillColor="#FFFFFF"
            innerIconStyle={{borderWidth: 2}}
            textStyle={{fontFamily: 'JosefinSans-Regular'}}
            // onPress={handleCheckTodo}
            onLongPress={() => handleDeleteTodo(todo.id)}
          />
          <Text>{title.length > 70 ? title.slice(0, 70) + '...' : title}</Text>
          {/* <Text>{title}</Text> */}
        </View>
        <View style={{gap: 2}}>
          <Text style={{fontSize: 12}}>{category?.category}</Text>
          <Text style={{fontSize: 14, color: '#0071F2', marginLeft: 8}}>
            {formatedTime(date)}
          </Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
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
