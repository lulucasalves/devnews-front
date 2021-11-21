import { combineReducers } from 'redux'

import model from './model'

const appReducer = combineReducers({
  model: model
})

export default function rootReducer(state, action) {
  return appReducer(state, action)
}
