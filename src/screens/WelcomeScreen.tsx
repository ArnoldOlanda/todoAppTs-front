import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {WelcomeIlustration} from '../components/WelcomeIlustration';
import {Button} from '../components/Button';

interface Props extends StackScreenProps<any> {}

export const WelcomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 25}}>
        <Text style={{...styles.title, color: '#7fa1fa', fontSize: 30}}>
          Doingly
        </Text>
      </View>
      <WelcomeIlustration />
      <Text style={{...styles.title, color: '#000', marginTop: 20}}>
        Welcome to Doingly
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#bfbfbf',
          fontSize: 20,
          fontWeight: 'bold',
          width: '80%',
          marginTop: 10,
        }}>
        Doingly helps you to stay organized and perfom your tasks much faster
      </Text>
      <View style={{flex: 1}} />
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Get Started"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(237,241,255,1) 100%)',
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
  },
});
