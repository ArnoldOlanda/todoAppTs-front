import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {WorkIcon, PersonalIcon, ShoopingIcon, HealthIcon} from './icons';

const categories = [
  {
    label: 'Work',
    component: <WorkIcon />,
  },
  {
    label: 'Personal',
    component: <PersonalIcon />,
  },
  {
    label: 'Shooping',
    component: <ShoopingIcon />,
  },
  {
    label: 'Health',
    component: <HealthIcon />,
  },
];

export const Categories = () => {
  return (
    <View>
      <Text style={styles.text}>Categories</Text>
      <View style={styles.categoriesContainer}>
        {categories.map(e => (
          <TouchableOpacity key={e.label} style={{alignItems: 'center'}}>
            <View style={styles.categorieItem}>{e.component}</View>
            <Text style={{textAlign: 'center', color: 'black', marginTop: 5}}>
              {e.label}
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
    borderColor: '#e8e8e8',
  },
});
