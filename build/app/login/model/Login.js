"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Login {
    constructor(correo, clave) {
        this._correoAcceso = correo;
        this._claveAcceso = clave;
    }
    // Getters y setters
    get correoAcceso() {
        return this._correoAcceso;
    }
    set correoAcceso(value) {
        this._correoAcceso = value;
    }
    get claveAcceso() {
        return this._claveAcceso;
    }
    set claveAcceso(value) {
        this._claveAcceso = value;
    }
}
exports.default = Login;
