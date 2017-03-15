import Toggle from 'material-ui/Toggle'
import createComponent from './createComponent'

export default createComponent(
  Toggle,
  ({
    input: {
      onChange,
      ...inputProps
    },
    defaultToggled,
    meta, // eslint-disable-line no-unused-vars
    ...props
  }) => ({
    ...inputProps,
    ...props,
    toggled: inputProps.value === "" ? defaultToggled : inputProps.value,
    onToggle: function onToggle(event, value) {
      onChange(value)
    }
  })
)
