//// [privateNamesAndkeyof.ts]
// @target es6

class A {
    #foo = 3;
    bar = 3;
    baz = 3;
}

type T = keyof A     // should not include '#foo'


//// [privateNamesAndkeyof.js]
// @target es6
var _foo;
<<<<<<< HEAD
=======
"use strict";
>>>>>>> 4427a64bc2... Add private named instance field transformation (#31)
var A = /** @class */ (function () {
    function A() {
        _foo.set(this, 3);
        this.bar = 3;
        this.baz = 3;
    }
    return A;
}());
_foo = new WeakMap();
