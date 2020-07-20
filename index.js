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

if (!firebase.apps.length) {
  console.log('Initializing new app');
  firebase.initializeApp(config);
}
console.log(firebase.apps.length);

AppRegistry.registerComponent(appName, () => App);
