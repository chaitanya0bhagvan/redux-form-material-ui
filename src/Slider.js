import Slider from 'material-ui/Slider'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  Slider,
  ({ input: { onDragStart, ...inputProps }, onChange: onChangeFunc, ...props }) =>  // eslint-disable-line no-unused-vars
    ({
      ...mapError({ ...props, input: {...inputProps, value: inputProps.value === "" ? props.defaultValue : inputProps.value} }, 'error'),      
      onChange: (event, value) => {
        inputProps.onChange(value)
        if(onChangeFunc && typeof onChangeFunc === 'function') {
          onChangeFunc(value)
        }
      }
    }),
    ({input, defaultValue}) => {
      if(defaultValue) {
        input.onChange(defaultValue)
      }
    }
)
