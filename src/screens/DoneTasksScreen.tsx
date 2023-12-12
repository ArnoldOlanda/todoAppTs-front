import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {DoneTaskItem} from '../components/DoneTasksScreen/DoneTaskItem';
import {Header} from '../components/common/Header';

export const DoneTasksScreen = () => {
  const {doneTodos} = useSelector((state: RootState) => state.todo);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.listcontainer}>
        <View style={{marginBottom: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
            Tasks completed 👌
          </Text>
        </View>
        <FlatList
          data={doneTodos}
          renderItem={({item, index}) => <DoneTaskItem todo={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{gap: 8}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listcontainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    marginBottom: 10,
  },
  flatListContainer: {},
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'red',
    paddingHorizontal: 10,
  },
});
