"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TipoVehiculo_1 = __importDefault(require("../model/TipoVehiculo"));
const ServicioTipoVehiculoActualizar_1 = __importDefault(require("../service/ServicioTipoVehiculoActualizar"));
class ControladorTipoVehiculoActualizar {
    llamarActualizar(req, res) {
        const objetito = new TipoVehiculo_1.default(req.body.codTipoVehiculo, req.body.claseTipoVehiculo);
        ServicioTipoVehiculoActualizar_1.default.actualizarTipoVehiculo(objetito, res);
    }
}
const controladorTipoVehiculoActualizar = new ControladorTipoVehiculoActualizar();
exports.default = controladorTipoVehiculoActualizar;
