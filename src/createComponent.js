import { Component, createElement } from 'react'

/**
 * Creates a component class that renders the given Material UI component
 *
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by redux-form to the props the Material UI component needs
 * @param performInit Any initialization that has to be done in componentWillMount
 */
export default function createComponent(MaterialUIComponent, mapProps, performInit = () => {}) {
  class InputComponent extends Component {
    getRenderedComponent() {
      return this.refs.component
    }

    componentWillMount() {
      performInit(this.props);
    }

    render() {
      return createElement(MaterialUIComponent, {
        ...mapProps(this.props),
        ref: 'component'
      })
    }
  }
  InputComponent.displayName = `ReduxFormMaterialUI${MaterialUIComponent.name}`
  return InputComponent
}
