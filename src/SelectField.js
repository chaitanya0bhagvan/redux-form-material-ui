import SelectField from 'material-ui/SelectField'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  SelectField,
  ({ input: { onChange,value, onBlur, ...inputProps }, onChangeFunc:onChangeFromField, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    value: value,
    onChange: (event, index, value) => {
      onChange(value)
      if(onChangeFromField && typeof onChangeFromField === 'function') {
        onChangeFromField(index, value)
      }
    },
    onBlur: () => onBlur(value)
  }))
