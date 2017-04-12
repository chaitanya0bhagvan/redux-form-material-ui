import SelectField from 'material-ui/SelectField'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  SelectField,
  ({ input: { onChange,value, onBlur, ...inputProps }, onChangeFunc:onChangeFromField, skipOnChange, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    value: value,
    onChange: (event, index, value) => {
      if(!skipOnChange) {
        onChange(value)
      }
      if(onChangeFromField && typeof onChangeFromField === 'function') {
        onChangeFromField(index, value)
      }
    },
    onBlur: () => onBlur(value)
  }))
