import authReducer from './auth'
import projectReducer from './project'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
})

export default rootReducer
