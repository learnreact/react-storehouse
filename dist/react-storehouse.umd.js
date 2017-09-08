(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global.ReactStorehouse = factory(global.React));
}(this, (function (React) { 'use strict';

React = React && 'default' in React ? React['default'] : React;

class ReactStorehouse extends React.Component {
  update(value) {
    window.localStorage.setItem(this.props.item, JSON.stringify(value));
    return this.forceUpdate();
  }

  render() {
    if (this.props.render) {
      return this.props.render(JSON.parse(window.localStorage.getItem(this.props.item)) || undefined, this.update.bind(this));
    }

    return null;
  }
}

return ReactStorehouse;

})));
