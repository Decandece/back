"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioUsuarioConsulta_1 = __importDefault(require("../service/ServicioUsuarioConsulta"));
class ControladorUsuarioConsulta {
    llamarObtenerTodos(req, res) {
        ServicioUsuarioConsulta_1.default.obtenerTodos(res);
    }
    llamarObtenerPorId(req, res) {
        const id = Number(req.params.codUsuario);
        ServicioUsuarioConsulta_1.default.obtenerPorId(res, id);
    }
    llamarObtenerPorRol(req, res) {
        const idRol = Number(req.params.codRol);
        ServicioUsuarioConsulta_1.default.obtenerPorRol(res, idRol);
    }
}
const controladorUsuarioConsulta = new ControladorUsuarioConsulta();
exports.default = controladorUsuarioConsulta;
