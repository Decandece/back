"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioTipoVehiculoConsulta_1 = __importDefault(require("../service/ServicioTipoVehiculoConsulta"));
class ControladorTipoVehiculoConsulta {
    llamarObtenerTodos(req, res) {
        ServicioTipoVehiculoConsulta_1.default.obtenerTodos(res);
    }
    llamarObtenerPorId(req, res) {
        const id = Number(req.params.codTipoVehiculo);
        ServicioTipoVehiculoConsulta_1.default.obtenerPorId(res, id);
    }
}
const controladorTipoVehiculoConsulta = new ControladorTipoVehiculoConsulta();
exports.default = controladorTipoVehiculoConsulta;
