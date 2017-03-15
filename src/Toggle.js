import Toggle from 'material-ui/Toggle'
import createComponent from './createComponent'
import mapError from './mapError'

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
    ...mapError({ ...props, input: { ...inputProps, toggled: inputProps.value === "" ? defaultToggled : inputProps.value } }),
    onToggle: function onToggle(event, value) {
      onChange(value)
    }
  }),
  ({input: {onChange}, defaultToggled}) => {
    if(defaultToggled) {
      onChange(defaultToggled)
    }
  }
)
