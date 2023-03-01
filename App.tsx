import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {NavigationApp} from './src/navigation/NavigationApp';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationApp />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
