"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehiculo_1 = __importDefault(require("../model/Vehiculo"));
const ServicioVehiculoCrear_1 = __importDefault(require("../service/ServicioVehiculoCrear"));
class ControladorVehiculoCrear {
    llamarGrabarVehiculo(req, res) {
        const objTemporal = new Vehiculo_1.default(0, req.body.codTipoVehiculo, req.body.codUsuario, req.body.placaVehiculo);
        ServicioVehiculoCrear_1.default.grabarVehiculo(objTemporal, res);
    }
}
const controladorVehiculoCrear = new ControladorVehiculoCrear();
exports.default = controladorVehiculoCrear;
