import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: 'AIzaSyAFt8cSUXcr3lOpdmlp7YbV1p85is1zMOw',
  authDomain: 'react-redux-firebase-tut-78c7e.firebaseapp.com',
  databaseURL: 'https://react-redux-firebase-tut-78c7e.firebaseio.com',
  projectId: 'react-redux-firebase-tut-78c7e',
  storageBucket: 'react-redux-firebase-tut-78c7e.appspot.com',
  messagingSenderId: '31733730896'
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
