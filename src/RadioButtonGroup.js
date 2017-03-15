import { RadioButtonGroup } from 'material-ui/RadioButton'
import createComponent from './createComponent'
import mapError from './mapError'

const mapValueToValueSelected = ({ input: { ...inputProps }, onChange: onChangeFunc, ...props }, errorProp) => ({
  ...mapError({ ...props, input: { ...inputProps, valueSelected: inputProps.value } }, errorProp),
  onChange: (event, value) => {
    inputProps.onChange(value);
    if(onChangeFunc && typeof onChangeFunc === 'function') {
      onChangeFunc(value);
    }
  }
})

export default createComponent(RadioButtonGroup, mapValueToValueSelected)
