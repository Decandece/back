"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioVehiculoConsulta_1 = __importDefault(require("../service/ServicioVehiculoConsulta"));
class ControladorVehiculoConsulta {
    llamarObtenerTodos(req, res) {
        ServicioVehiculoConsulta_1.default.obtenerTodos(res);
    }
    llamarObtenerPorId(req, res) {
        const id = Number(req.params.codVehiculo);
        ServicioVehiculoConsulta_1.default.obtenerPorId(res, id);
    }
    llamarObtenerPorUsuario(req, res) {
        const idUsuario = Number(req.params.codUsuario);
        ServicioVehiculoConsulta_1.default.obtenerPorUsuario(res, idUsuario);
    }
    llamarObtenerPorTipo(req, res) {
        const idTipo = Number(req.params.codTipoVehiculo);
        ServicioVehiculoConsulta_1.default.obtenerPorTipo(res, idTipo);
    }
    llamarObtenerPorPlaca(req, res) {
        const placa = req.params.placa;
        ServicioVehiculoConsulta_1.default.obtenerPorPlaca(res, placa);
    }
}
const controladorVehiculoConsulta = new ControladorVehiculoConsulta();
exports.default = controladorVehiculoConsulta;
