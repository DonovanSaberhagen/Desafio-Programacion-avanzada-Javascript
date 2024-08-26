"use strict";

require("core-js/modules/es.symbol.description.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animal = void 0;
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _nombre = /*#__PURE__*/new WeakMap();
var _edad = /*#__PURE__*/new WeakMap();
var _img = /*#__PURE__*/new WeakMap();
var _comentarios = /*#__PURE__*/new WeakMap();
var _sonido = /*#__PURE__*/new WeakMap();
// Clase Animal que representa un animal con sus atributos y métodos básicos
var Animal = exports.Animal = /*#__PURE__*/function () {
  // Constructor de la clase Animal
  function Animal(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Animal);
    // Atributos privados de la clase Animal
    _classPrivateFieldInitSpec(this, _nombre, void 0);
    _classPrivateFieldInitSpec(this, _edad, void 0);
    _classPrivateFieldInitSpec(this, _img, void 0);
    _classPrivateFieldInitSpec(this, _comentarios, void 0);
    _classPrivateFieldInitSpec(this, _sonido, void 0);
    _classPrivateFieldSet(_nombre, this, nombre);
    _classPrivateFieldSet(_edad, this, edad);
    _classPrivateFieldSet(_img, this, img);
    _classPrivateFieldSet(_comentarios, this, comentarios);
    _classPrivateFieldSet(_sonido, this, sonido);
  }

  /* Getters y Setters */

  // Getter para obtener el nombre del animal
  return _createClass(Animal, [{
    key: "nombre",
    get: function get() {
      return _classPrivateFieldGet(_nombre, this);
    }

    // Getter para obtener la edad del animal
  }, {
    key: "edad",
    get: function get() {
      return _classPrivateFieldGet(_edad, this);
    }

    // Getter para obtener la ruta de la imagen del animal
  }, {
    key: "img",
    get: function get() {
      return _classPrivateFieldGet(_img, this);
    }

    // Getter para obtener los comentarios sobre el animal
  }, {
    key: "comentarios",
    get: function get() {
      return _classPrivateFieldGet(_comentarios, this);
    }

    // Setter para actualizar los comentarios sobre el animal
    ,
    set: function set(newText) {
      _classPrivateFieldSet(_comentarios, this, newText);
    }

    // Getter para obtener el sonido del animal
  }, {
    key: "sonido",
    get: function get() {
      return _classPrivateFieldGet(_sonido, this);
    }
  }]);
}();