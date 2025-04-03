"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TipoVehiculo {
    constructor(cod, clase) {
        this._codTipoVehiculo = cod;
        this._claseTipoVehiculo = clase; // Cambié "desc" por "clase"
    }
    get codTipoVehiculo() {
        return this._codTipoVehiculo;
    }
    get claseTipoVehiculo() {
        // Cambié "descTipoVehiculo" por "claseTipoVehiculo"
        return this._claseTipoVehiculo;
    }
    set codTipoVehiculo(value) {
        this._codTipoVehiculo = value;
    }
    set claseTipoVehiculo(value) {
        // Cambié "descTipoVehiculo" por "claseTipoVehiculo"
        this._claseTipoVehiculo = value;
    }
}
exports.default = TipoVehiculo;
