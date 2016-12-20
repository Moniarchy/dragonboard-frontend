import { FORM_FIELD_UPDATE, FORM_RESET } from './constants'

const formFieldUpdate = ( name, value ) =>
  dispatch => dispatch({
    type: FORM_FIELD_UPDATE,
    name,
    value
  })

const formReset = () =>
  dispatch => dispatch({ type: FORM_RESET })

export {
  formFieldUpdate,
  formReset
}
