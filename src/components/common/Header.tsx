import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HamburguerIcon, UserIcon} from '../icons';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export const Header = () => {
  const navigation =
    useNavigation<
      DrawerNavigationProp<any, string | number | symbol, undefined>
    >();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerItem}
        onPress={() => navigation.openDrawer()}>
        <HamburguerIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerItem}>
        <UserIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
