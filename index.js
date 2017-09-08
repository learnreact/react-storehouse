import React from "react";

class ReactStorehouse extends React.Component {
  update(value) {
    window.localStorage.setItem(this.props.item, JSON.stringify(value));
    return this.forceUpdate();
  }

  render() {
    if (this.props.render) {
      return this.props.render(
        JSON.parse(window.localStorage.getItem(this.props.item)) || undefined,
        this.update.bind(this)
      );
    }

    return null;
  }
}

export default ReactStorehouse;
