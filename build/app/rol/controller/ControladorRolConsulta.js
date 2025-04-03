"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioRolConsulta_1 = __importDefault(require("../service/ServicioRolConsulta"));
class ControladorRolConsulta extends ServicioRolConsulta_1.default {
    llamarObtenerTodos(req, res) {
        ServicioRolConsulta_1.default.obtenerTodos(res);
    }
    llamarCrearRol(req, res) {
        const { nombre } = req.body;
        ServicioRolConsulta_1.default.crearRol(res, nombre);
    }
    llamarEliminarRol(req, res) {
        const { id } = req.params;
        ServicioRolConsulta_1.default.eliminarRol(res, Number(id));
    }
}
const controladorRolConsulta = new ControladorRolConsulta();
exports.default = controladorRolConsulta;
