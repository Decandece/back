"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponse = exports.Login = void 0;
class Login {
    constructor(correo, clave) {
        this.correo = correo;
        this.clave = clave;
    }
}
exports.Login = Login;
class LoginResponse {
    constructor(codUsuario, nombresUsuario, apellidosUsuario, nombreRol) {
        this.codUsuario = codUsuario;
        this.nombresUsuario = nombresUsuario;
        this.apellidosUsuario = apellidosUsuario;
        this.nombreRol = nombreRol;
    }
}
exports.LoginResponse = LoginResponse;
