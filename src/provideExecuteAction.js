import { PropTypes, Component, createElement } from 'react';
import inherits from 'inherits';
import hoistNonReactStatics from 'hoist-non-react-statics';

function createComponent(CurrentComponent) {
  function Provider(...args) {
    Component.apply(this, args);
  }

  inherits(Provider, Component);

  const componentName = CurrentComponent.displayName || CurrentComponent.name;
  Provider.displayName = componentName + 'ExecuteActionProvider';
  Provider.contextTypes = {
    executeAction: PropTypes.func.isRequired,
  };

  Provider.prototype.render = function render() {
    return createElement(CurrentComponent, {
      ...this.props,
      executeAction: this.context.executeAction,
    });
  };

  hoistNonReactStatics(Provider, CurrentComponent);

  return Provider;
}

export default function provide(...args) {
  // support decorator pattern
  if (args.length === 0) {
    return (ComponentToDecorate) => createComponent(ComponentToDecorate);
  }

  return createComponent.apply(null, args);
}
