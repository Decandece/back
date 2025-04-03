"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("../model/Usuario"));
const ServicioUsuarioCrear_1 = __importDefault(require("../service/ServicioUsuarioCrear"));
class ControladorUsuarioCrear {
    llamarGrabarUsuario(req, res) {
        const fechaNacimiento = new Date(req.body.fechaNacimientoUsuario);
        const objTemporal = new Usuario_1.default(0, req.body.codRol, req.body.documentoUsuario, req.body.nombresUsuario, req.body.apellidosUsuario, req.body.generoUsuario, fechaNacimiento, req.body.telefonoUsuario);
        ServicioUsuarioCrear_1.default.grabarUsuario(objTemporal, res);
    }
}
const controladorUsuarioCrear = new ControladorUsuarioCrear();
exports.default = controladorUsuarioCrear;
