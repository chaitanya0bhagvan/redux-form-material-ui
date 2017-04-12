import AutoComplete from 'material-ui/AutoComplete'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  AutoComplete,
  ({ input: { value, ...inputProps }, onNewRequest: onNewRequestFunc, skipOnChange, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    searchText: value,
    onNewRequest: value => {
      if(!skipOnChange) {
        inputProps.onChange(value)
      }
      if(onNewRequestFunc && typeof onNewRequestFunc === 'function') {
        onNewRequestFunc(value)
      }
    }
  }))
