"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(codUsu, codRol, documento, nombres, apellidos, genero, fechaNacimiento, telefono) {
        this._codUsuario = codUsu;
        this._codRol = codRol;
        this._documentoUsuario = documento;
        this._nombresUsuario = nombres;
        this._apellidosUsuario = apellidos;
        this._generoUsuario = genero;
        this._fechaNacimientoUsuario = fechaNacimiento;
        this._telefonoUsuario = telefono;
    }
    get codUsuario() {
        return this._codUsuario;
    }
    get codRol() {
        return this._codRol;
    }
    get documentoUsuario() {
        return this._documentoUsuario;
    }
    get nombresUsuario() {
        return this._nombresUsuario;
    }
    get apellidosUsuario() {
        return this._apellidosUsuario;
    }
    get generoUsuario() {
        return this._generoUsuario;
    }
    get fechaNacimientoUsuario() {
        return this._fechaNacimientoUsuario;
    }
    get telefonoUsuario() {
        return this._telefonoUsuario;
    }
    set codUsuario(value) {
        this._codUsuario = value;
    }
    set codRol(value) {
        this._codRol = value;
    }
    set documentoUsuario(value) {
        this._documentoUsuario = value;
    }
    set nombresUsuario(value) {
        this._nombresUsuario = value;
    }
    set apellidosUsuario(value) {
        this._apellidosUsuario = value;
    }
    set generoUsuario(value) {
        this._generoUsuario = value;
    }
    set fechaNacimientoUsuario(value) {
        this._fechaNacimientoUsuario = value;
    }
    set telefonoUsuario(value) {
        this._telefonoUsuario = value;
    }
}
exports.default = Usuario;
