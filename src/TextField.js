import TextField from 'material-ui/TextField'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  TextField,
  ({
    input: {
      ...inputProps
    },
    defaultValue,
    onChangeField,
    skipOnChange,
    ...props
  }) => {
    if(inputProps.value === '') {
      inputProps.value = defaultValue || inputProps.value
    }
    return {
      ...inputProps,
      ...mapError(props),
      onChange: (e, newValue) => {
        if(onChangeField && typeof onChangeField === 'function') {
          onChangeField(newValue);
        }
        if(!skipOnChange) {
          inputProps.onChange(newValue);
        }
      }
    }
  }
)
