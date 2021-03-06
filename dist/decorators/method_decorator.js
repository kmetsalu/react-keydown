/**
 * @module methodWrapper
 *
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _event_handlers = require('../event_handlers');

/**
 * methodWrapper
 *
 * @access public
 * @param {object} args All arguments necessary for wrapping method
 * @param {object} args.target The decorated class
 * @param {object} args.descriptor Method descriptor
 * @param {array} args.keys The array of keys bound to the given method
 * @return {object} The method descriptor
 */
function methodWrapper(_ref) {
  var target = _ref.target;
  var descriptor = _ref.descriptor;
  var keys = _ref.keys;

  // if we haven't already created a binding for this class (via another
  // decorated method), wrap these lifecycle methods.
  if (!_store2['default'].getBinding(target)) {
    (function () {
      var componentDidMount = target.componentDidMount;
      var componentWillUnmount = target.componentWillUnmount;

      target.componentDidMount = function () {
        (0, _event_handlers.onMount)(this);
        if (componentDidMount) return componentDidMount.call(this);
      };

      target.componentWillUnmount = function () {
        (0, _event_handlers.onUnmount)(this);
        if (componentWillUnmount) return componentWillUnmount.call(this);
      };
    })();
  }

  // add this binding of keys and method to the target's bindings
  _store2['default'].setBinding({ keys: keys, target: target, fn: descriptor.value });

  return descriptor;
}

exports['default'] = methodWrapper;
module.exports = exports['default'];