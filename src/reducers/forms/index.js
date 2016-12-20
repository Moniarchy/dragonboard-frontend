import { FORM_FIELD_UPDATE, FORM_RESET } from '../../actions/forms/constants'
// import * from './registrationFormReducer'

const initialState = {
  values: {}
}

const formReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case FORM_RESET:
      console.log('resetForm()')
      return initialState
    case FORM_FIELD_UPDATE:
      console.log('fieldUpdate')
      return Object.assign({}, state, {
        values: Object.assign({}, state.values, {
          [action.name]: action.value
        })
      })
    default:
      console.log('no')
      return state
  }
}

export default formReducer
