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
import Dropdown from 'react-native-input-select';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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

  const {title, date, time} = formState;
  const {titleValid, dateValid, timeValid} = formValidation;

  return (
    <RNModal
      isVisible={open}
      onBackButtonPress={close}
      useNativeDriver={true}
      avoidKeyboard={true}
      backdropColor="gray"
      style={{
        margin: 0,
        // justifyContent: 'flex-end',
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={30}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={globalStyles.text}>Add New Todo</Text>
          <TouchableOpacity onPress={() => close()} style={styles.icon}>
            <Icon name="close" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{alignItems: 'center', marginTop: 40, flex: 1}}>
            <View style={styles.categoryDropdownContainer}>
              <Dropdown
                placeholder="Choose an category"
                dropdownStyle={{
                  ...globalStyles.textInput,
                  alignSelf: 'center',
                  backgroundColor: 'white',
                }}
                checkboxComponentStyles={{
                  checkboxStyle: {
                    borderRadius: 50,
                    backgroundColor: '#6887F6',
                  },
                }}
                options={[
                  {label: '🧑 Personal', value: 1},
                  {label: '💼 Work', value: 2},
                  {label: '🧺 Shop', value: 3},
                  {label: '❤️‍🩹 Health', value: 4},
                ]}
                selectedValue={formState.category}
                onValueChange={(value: any) =>
                  onInputTextChange('category', value)
                }
                primaryColor={'green'}
              />
            </View>

            <TextInput
              error={!!titleValid && formSubmited}
              errorMessage={titleValid}
              onChange={value => onInputTextChange('title', value)}
              placeholder="Title"
              value={title}
            />

            <View style={styles.dateTimeContainer}>
              <TextInput
                error={!!dateValid && formSubmited}
                errorMessage={dateValid}
                onChange={() => {}}
                placeholder="date"
                value={date}
                icon={<Icon name="date-range" size={25} />}
                onPressIcon={showDatepicker}
                style={{width: '48%'}}
              />
              <TextInput
                error={!!timeValid && formSubmited}
                errorMessage={timeValid}
                onChange={() => {}}
                placeholder="time"
                value={time}
                icon={<Icon name="schedule" size={25} />}
                onPressIcon={showTimepicker}
                style={{width: '48%'}}
              />
            </View>

            <View
              style={{
                width: '100%',
                paddingHorizontal: 15,
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <BouncyCheckbox
                size={25}
                isChecked={false}
                fillColor="#0071F2"
                unfillColor="#FFFFFF"
                innerIconStyle={{borderWidth: 2}}
                onPress={() => {}}
                onLongPress={() => {}}
                style={{marginLeft: 4}}
              />
              <Text>Add notification</Text>
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
    margin: 10,
    maxHeight: windowHeight * 0.65,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
  categoryDropdownContainer: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    height: 65,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});
