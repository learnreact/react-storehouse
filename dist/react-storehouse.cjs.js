'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

module.exports = ReactStorehouse;
