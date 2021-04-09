import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TopNews from './screens/TopNews';
import Gossip from './screens/Gossip';
import Entertainment from './screens/Entertainment';
import Comics from './screens/Comics';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  TopNews: TopNews,
  Gossip: Gossip,
  Entertainment: Entertainment,
  Comics: Comics,
});

const AppContainer = createAppContainer(AppNavigator);
