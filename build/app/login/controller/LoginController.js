"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const ServicioLogin_1 = __importDefault(require("../service/ServicioLogin"));
const Acceso_1 = __importDefault(require("../model/Acceso"));
class LoginController {
    iniciarSesion(req, res) {
        const errores = (0, express_validator_1.validationResult)(req);
        if (!errores.isEmpty()) {
            res.status(400).json({ errores: errores.array() });
        }
        else {
            const { correo, clave } = req.body;
            // Creamos un objeto Acceso con valores temporales para codUsuario y uuidAcceso
            // que serán actualizados en el servicio si la autenticación es exitosa
            const acceso = new Acceso_1.default(0, correo, clave, "");
            ServicioLogin_1.default.validarUsuario(acceso, res);
        }
    }
}
const loginController = new LoginController();
exports.default = loginController;
