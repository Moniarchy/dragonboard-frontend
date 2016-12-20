import * as constants from './constants'

const formFieldUpdate = ( name, value ) =>
  ({ type: constants.FORM_FIELD_UPDATE, name, value })

const formSubmit = data => ({ type: constants.FORM_SUBMIT, data })

const formReset = () => ({ type: constants.FORM_RESET })

export {
  formFieldUpdate,
  formSubmit,
  formReset
}
