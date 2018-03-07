import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Slider,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform
  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <History />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  }
});

/*
  <TouchableNativeFeedback
  background={TouchableNativeFeedback.SelectableBackground()}
  onPress={this.handlePress}
  underlayColor='#d4271b'>
    <View style={styles.btn}>
      <Text style={styles.btnText}>Touchable Highlight</Text>
    </View>
  </TouchableNativeFeedback>
*/
