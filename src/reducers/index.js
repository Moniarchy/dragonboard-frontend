import { combineReducers } from 'redux'

import widgets from './widgets'
import forms from './forms'

const reducer = combineReducers({
  widgets,
  forms
})

export default reducer
