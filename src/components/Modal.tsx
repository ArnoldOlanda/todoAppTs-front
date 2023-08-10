import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import RNModal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalStyles} from '../theme/styles';
import {Button} from './Button';
import {TextInput} from './TextInput';
import {useModalAddTodo} from '../hooks/useModalAddTodo';

const windowHeight = Dimensions.get('window').height;

interface Props {
  open: boolean;
  close: () => void;
}

export const Modal = ({open, close}: Props) => {
  const {
    showDatepicker,
    showTimepicker,
    handlePressAdd,
    formState,
    formValidation,
    onInputTextChange,
    formSubmited,
  } = useModalAddTodo({closeModal: close});

  const {title, description, date, time} = formState;
  const {titleValid, dateValid, timeValid} = formValidation;

  return (
    <RNModal
      isVisible={open}
      onBackButtonPress={() => close()}
      useNativeDriver={true}
      avoidKeyboard={false}
      style={{
        margin: 0,
        justifyContent: 'flex-end',
        // position: 'absolute',
        // width: '100%',
        // bottom: 0,
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={globalStyles.text}>Add New Todo</Text>
          <TouchableOpacity onPress={() => close()} style={styles.icon}>
            <Icon name="close" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{alignItems: 'center', marginTop: 40, flex: 1}}>
            <TextInput
              error={!!titleValid && formSubmited}
              errorMessage={titleValid}
              onChange={value => onInputTextChange('title', value)}
              placeholder="title"
              value={title}
            />
            <TextInput
              error={false}
              errorMessage=""
              onChange={value => onInputTextChange('description', value)}
              placeholder="description"
              multiline
              value={description}
            />
            <View
              style={{
                width: '100%',
                paddingHorizontal: 15,
                marginTop: 5,
              }}>
              <Text>Add notification</Text>
            </View>
            <View style={styles.dateTimeContainer}>
              <TextInput
                error={!!dateValid && formSubmited}
                errorMessage={dateValid}
                onChange={() => {}}
                placeholder="select a date"
                value={date}
                icon={<Icon name="date-range" size={25} />}
                onPressIcon={showDatepicker}
                style={{width: '48%'}}
              />
              <TextInput
                error={!!timeValid && formSubmited}
                errorMessage={timeValid}
                onChange={() => {}}
                placeholder="select a time"
                value={time}
                icon={<Icon name="schedule" size={25} />}
                onPressIcon={showTimepicker}
                style={{width: '48%'}}
              />
            </View>
            <View style={{height: 15}} />
            <Button title="Add" isLoading={false} onPress={handlePressAdd} />
          </View>
        </ScrollView>
        <View style={{alignItems: 'center'}}></View>
      </KeyboardAvoidingView>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.85,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 15,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});
