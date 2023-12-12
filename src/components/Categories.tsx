import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {WorkIcon, PersonalIcon, ShoopingIcon, HealthIcon} from './icons';
import {useDispatch} from 'react-redux';
import {clearFilters, filterTodos} from '../redux/slices/todo.slice';

const categories = [
  {
    id: 1,
    label: 'Personal',
    component: <PersonalIcon />,
  },
  {
    id: 2,
    label: 'Work',
    component: <WorkIcon />,
  },
  {
    id: 3,
    label: 'Shooping',
    component: <ShoopingIcon />,
  },
  {
    id: 4,
    label: 'Health',
    component: <HealthIcon />,
  },
];

export const Categories = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const onPressCategorieItem = (id: number) => {
    setSelectedCategory(id);
    dispatch(filterTodos(id));
  };

  const onPressClearFilters = () => {
    dispatch(clearFilters());
    setSelectedCategory(0);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}>
        <Text style={styles.text}>Categories</Text>
        <TouchableOpacity onPress={onPressClearFilters}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
        {categories.map(({id, component, label}) => (
          <TouchableOpacity
            key={id}
            style={{alignItems: 'center'}}
            activeOpacity={0.5}
            onPress={() => onPressCategorieItem(id)}>
            <View
              style={[
                styles.categorieItem,
                {backgroundColor: selectedCategory === id ? '#dde4fc' : '#fff'},
                {borderColor: selectedCategory === id ? '#6887F6' : '#e8e8e8'},
              ]}>
              {component}
            </View>
            <Text style={{textAlign: 'center', color: 'black', marginTop: 5}}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  categoriesContainer: {
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categorieItem: {
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    // borderColor: '#e8e8e8',
    // backgroundColor: '#6887F6',
  },
});
