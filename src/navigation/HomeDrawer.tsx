import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {HomeScreen} from '../screens';
import {TouchableAndroid} from '../components/TouchableAndroid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/slices/auth.slice';
import {RootState} from '../redux/store';
import {DoneTasksScreen} from '../screens/DoneTasksScreen';
import {COLORS} from '../theme/colors';

const Drawer = createDrawerNavigator();

export const HomeDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Done"
        options={{headerShown: false}}
        component={DoneTasksScreen}
      />
      <Drawer.Screen
        name="Settings"
        options={{headerShown: false}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.auth);
  return (
    <DrawerContentScrollView style={styles.drawerContent}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Icon name="person" size={100} color={COLORS.GRAY} />
          <Text style={{fontSize: 25}}>{user?.user}</Text>
          <Text>{user?.name}</Text>
        </View>
        <TouchableAndroid
          containerStyles={styles.menuItem}
          rippleRadius={150}
          onPress={() => navigation.navigate('Home')}>
          <>
            <Icon name="home" size={25} color="#585858" />
            <Text style={{color: '#363636'}}>Home</Text>
          </>
        </TouchableAndroid>
        <TouchableAndroid
          containerStyles={styles.menuItem}
          rippleRadius={150}
          onPress={() => navigation.navigate('Done')}>
          <>
            <Icon name="done-all" size={25} color={COLORS.GRAY} />
            <Text style={{color: COLORS.GRAY}}>Done</Text>
          </>
        </TouchableAndroid>
        <TouchableAndroid
          containerStyles={styles.menuItem}
          rippleRadius={150}
          onPress={() => navigation.navigate('Settings')}>
          <>
            <Icon name="settings" size={25} color={COLORS.GRAY} />
            <Text style={{color: COLORS.GRAY}}>Settings</Text>
          </>
        </TouchableAndroid>
        <TouchableAndroid
          containerStyles={styles.menuItem}
          rippleRadius={150}
          onPress={() => dispatch(logout())}>
          <>
            <Icon name="logout" size={25} color={COLORS.GRAY} />
            <Text style={{color: COLORS.GRAY}}>Logout</Text>
          </>
        </TouchableAndroid>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    padding: 10,
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
  menuItem: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
  },
});
