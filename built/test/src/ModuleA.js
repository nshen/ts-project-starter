"use strict";
var ModuleA = (function () {
    function ModuleA(name) {
        if (name === void 0) { name = "World"; }
        // console.log(`Hello ${name}!`);
        this._name = name;
    }
    ;
    ModuleA.prototype.toString = function () {
        return "Hello " + this._name + "!";
    };
    return ModuleA;
}());
exports.ModuleA = ModuleA;
//# sourceMappingURL=ModuleA.js.map