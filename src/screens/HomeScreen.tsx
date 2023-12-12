import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import {globalStyles} from '../theme/styles';
import {HamburguerIcon} from '../components/icons/HamburguerIcon';
import {UserIcon} from '../components/icons/UserIcon';
import {TodoIlustration} from '../components/TodoIlustration';
import {Categories, TasksList} from '../components';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useTodosStore} from '../hooks/useTodosStore';
import {Fab} from '../components/Fab';
import {Modal} from '../components/Modal';
import {RefreshControl} from 'react-native-gesture-handler';
import {Header} from '../components/common/Header';

const windowWidth = Dimensions.get('screen').width;

interface Props extends DrawerScreenProps<any> {}

export const HomeScreen = ({navigation}: Props) => {
  const {todos, filterApplied, filteredTodos} = useSelector(
    (state: RootState) => state.todo,
  );
  const {loading, refreshing, onRefresh} = useTodosStore();

  const [openModal, setOpenModal] = useState(false);

  return (
    <View style={styles.container}>
      {/* <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerItem}
          onPress={() => navigation.openDrawer()}>
          <HamburguerIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem}>
          <UserIcon />
        </TouchableOpacity>
      </View> */}
      <Header />
      <View style={styles.messageViewContainer}>
        <Text style={{...globalStyles.text, color: 'white', width: '40%'}}>
          Manage your time well
        </Text>
        <View>
          <TodoIlustration />
        </View>
      </View>
      <ScrollView
        style={{width: '100%', paddingHorizontal: 15}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Categories />

        {loading ? (
          <ActivityIndicator />
        ) : (
          <TasksList todos={filterApplied ? filteredTodos : todos} />
        )}
        <View style={{height: 100}} />
      </ScrollView>
      <Fab onPress={() => setOpenModal(true)} />
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // padding: 15,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 15,
  },
  headerItem: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#e8e8e8',
  },
  messageViewContainer: {
    width: windowWidth - 30,
    marginBottom: 10,
    height: 110,
    flexDirection: 'row',
    backgroundColor: '#6887F6',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 50,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
