import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
  dislikePressed() {
    var dislike = db.ref('Rating/' + '/');
    dislike.update({
      dislikePressed: 1,
    });
  }
  likePressed() {
    var like = db.ref('Rating/' + '/');
    like.update({
      likePressed: 1,
    });
  }
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <AppHeader />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'red' }]}
            onPress={() => {
              this.props.navigation.navigate('TopNews');
            }}>
            <Text style={styles.buttonText}>Top News</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'green' }]}
            onPress={() => {
              this.props.navigation.navigate('Gossip');
            }}>
            <Text style={styles.buttonText}>Gossip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'blue' }]}
            onPress={() => {
              this.props.navigation.navigate('Entertainment');
            }}>
            <Text style={styles.buttonText}>Entertainment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'yellow' }]}
            onPress={() => {
              this.props.navigation.navigate('Comics');
            }}>
            <Text style={styles.buttonText}>Comics</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.likePressed}>
            <Image
              source={require('../assets/thumbsup.png')}
              style={{ width: 40, height: 40, margin: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.dislikePressed}>
            <Image
              source={require('../assets/thumbsdown.png')}
              style={{
                width: 40,
                height: 40,
                margin: 10,
                marginLeft: '85%',
                marginTop: -50,
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
