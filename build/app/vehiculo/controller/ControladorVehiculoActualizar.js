"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehiculo_1 = __importDefault(require("../model/Vehiculo"));
const ServicioVehiculoActualizar_1 = __importDefault(require("../service/ServicioVehiculoActualizar"));
class ControladorVehiculoActualizar {
    llamarActualizar(req, res) {
        const objetito = new Vehiculo_1.default(req.body.codVehiculo, req.body.codTipoVehiculo, req.body.codUsuario, req.body.placaVehiculo);
        ServicioVehiculoActualizar_1.default.actualizarVehiculo(objetito, res);
    }
}
const controladorVehiculoActualizar = new ControladorVehiculoActualizar();
exports.default = controladorVehiculoActualizar;
