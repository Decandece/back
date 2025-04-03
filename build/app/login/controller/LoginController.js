"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const ServicioLogin_1 = __importDefault(require("../service/ServicioLogin"));
const Login_1 = require("../entity/Login");
class LoginController {
    iniciarSesion(req, res) {
        const errores = (0, express_validator_1.validationResult)(req);
        if (!errores.isEmpty()) {
            res.status(400).json({ errores: errores.array() });
        }
        else {
            const { correo, clave } = req.body;
            const login = new Login_1.Login(correo, clave);
            ServicioLogin_1.default.validarUsuario(login, res);
        }
    }
}
const loginController = new LoginController();
exports.default = loginController;
