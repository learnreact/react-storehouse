import React from 'react';

var ReactStorehouse = (function (superclass) {
    function ReactStorehouse () {
        superclass.apply(this, arguments);
    }

    if ( superclass ) ReactStorehouse.__proto__ = superclass;
    ReactStorehouse.prototype = Object.create( superclass && superclass.prototype );
    ReactStorehouse.prototype.constructor = ReactStorehouse;

    ReactStorehouse.prototype.update = function update (value) {
        window.localStorage.setItem(this.props.item, JSON.stringify(value));
        return this.forceUpdate();
    };
    ReactStorehouse.prototype.render = function render () {
        if (this.props.render) {
            return this.props.render(JSON.parse(window.localStorage.getItem(this.props.item)) || undefined, this.update.bind(this));
        }
        return null;
    };

    return ReactStorehouse;
}(React.Component));

export default ReactStorehouse;
//# sourceMappingURL=react-storehouse.esm.js.map
