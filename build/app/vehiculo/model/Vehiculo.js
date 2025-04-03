"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    constructor(codVeh, codTipo, codUsu, placa) {
        this._codVehiculo = codVeh;
        this._codTipoVehiculo = codTipo;
        this._codUsuario = codUsu;
        this._placaVehiculo = placa;
    }
    get codVehiculo() {
        return this._codVehiculo;
    }
    get codTipoVehiculo() {
        return this._codTipoVehiculo;
    }
    get codUsuario() {
        return this._codUsuario;
    }
    get placaVehiculo() {
        return this._placaVehiculo;
    }
    set codVehiculo(value) {
        this._codVehiculo = value;
    }
    set codTipoVehiculo(value) {
        this._codTipoVehiculo = value;
    }
    set codUsuario(value) {
        this._codUsuario = value;
    }
    set placaVehiculo(value) {
        this._placaVehiculo = value;
    }
}
exports.default = Vehiculo;
