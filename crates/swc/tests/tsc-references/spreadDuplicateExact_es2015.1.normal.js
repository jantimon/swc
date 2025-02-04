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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
let a1 = _objectSpread({
    a: 123
}, a); // string (Error)
let b1 = _objectSpread({
    a: 123
}, b); // string | number
let c1 = _objectSpread({
    a: 123
}, c); // string | undefined (Error)
let d1 = _objectSpread({
    a: 123
}, d); // string | number | undefined
let a2 = _objectSpread({
    a: 123
}, t ? a : {}); // string | number
let b2 = _objectSpread({
    a: 123
}, t ? b : {}); // string | number
let c2 = _objectSpread({
    a: 123
}, t ? c : {}); // string | number | undefined
let d2 = _objectSpread({
    a: 123
}, t ? d : {}); // string | number | undefined
