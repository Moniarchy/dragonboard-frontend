import * as constants from '../../actions/forms/constants'
// import * from './registrationFormReducer'

const formReducer = ( state = [], action ) => {
  switch( action.type ) {
    case constants.FORM_RESET:
      console.log('resetForm()')
      return state
    case constants.FORM_FIELD_UPDATE:
      console.log('fieldUpdate')
      return state
    case constants.FORM_SUBMIT:
      console.log('formSubmit')
      return state
    default:
      console.log('no')
      return state
  }
}

export default formReducer
