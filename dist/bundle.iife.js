(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var ClassA =
  /*#__PURE__*/
  function () {
    // protected _name: string;
    function ClassA() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "World";

      _classCallCheck(this, ClassA);

      _defineProperty(this, "n", "");

      // this._name = name;
      this.n = name;
    }

    _createClass(ClassA, [{
      key: "toString",
      value: function toString() {
        return "Hello ".concat(this.n, "!");
      }
    }]);

    return ClassA;
  }();
  function FuncB() {
    console.log('FuncB...');
  }

  var a = new ClassA('World');
  console.log(a.toString()); // FuncA should be shaked

  FuncB();

}());
