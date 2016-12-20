export const formFieldUpdate = ( state, action ) => {
  const { name, value } = action

  const newFieldValue = Object.assign( {}, state )
  newFieldValue.data = {
    [name]: value
  }

  return newFieldValue
}
