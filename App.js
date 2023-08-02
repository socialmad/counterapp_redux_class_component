import React, { Component } from 'react';
import { View } from 'react-native';
import Counter from './src/components/Counter';
import { NativeBaseProvider } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <View>
          <Counter />
        </View>
      </NativeBaseProvider>

    )
  }
}