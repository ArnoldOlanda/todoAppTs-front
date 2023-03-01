import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {WelcomeScreen, LoginScreen, RegisterScreen} from '../screens';
import {HomeDrawer} from './HomeDrawer';
import {RootState} from '../redux/store';

const Stack = createStackNavigator();

export const NavigationApp = () => {
  const {status} = useSelector((state: RootState) => state.auth);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {status === 'not-authenticated' ? (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Drawer" component={HomeDrawer} />
        </>
      )}
    </Stack.Navigator>
  );
};
