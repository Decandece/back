"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioUsuarioBorrar_1 = __importDefault(require("../service/ServicioUsuarioBorrar"));
const Usuario_1 = __importDefault(require("../model/Usuario"));
class ControladorUsuarioBorrar {
    llamarBorrar(req, res) {
        const codigo = Number(req.params.codUsuario);
        const fechaVacia = new Date();
        const objUsuario = new Usuario_1.default(codigo, 0, "", "", "", 0, fechaVacia, "");
        ServicioUsuarioBorrar_1.default.borrar(objUsuario, res);
    }
}
const controladorUsuarioBorrar = new ControladorUsuarioBorrar();
exports.default = controladorUsuarioBorrar;
