"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("../model/Usuario"));
const ServicioUsuarioActualizar_1 = __importDefault(require("../service/ServicioUsuarioActualizar"));
class ControladorUsuarioActualizar {
    llamarActualizar(req, res) {
        const fechaNacimiento = new Date(req.body.fechaNacimientoUsuario);
        const objetito = new Usuario_1.default(req.body.codUsuario, req.body.codRol, req.body.documentoUsuario, req.body.nombresUsuario, req.body.apellidosUsuario, req.body.generoUsuario, fechaNacimiento, req.body.telefonoUsuario);
        ServicioUsuarioActualizar_1.default.actualizarUsuario(objetito, res);
    }
}
const controladorUsuarioActualizar = new ControladorUsuarioActualizar();
exports.default = controladorUsuarioActualizar;
