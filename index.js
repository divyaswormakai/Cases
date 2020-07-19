/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from 'firebase';

var config = {
  databaseURL: 'https://cases-bf52f.firebaseio.com',
  projectId: 'cases-bf52f',
};

if (!firebase.app.length) {
  firebase.initializeApp(config);
}

AppRegistry.registerComponent(appName, () => App);
