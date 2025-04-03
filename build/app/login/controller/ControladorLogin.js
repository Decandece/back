"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioLogin_1 = __importDefault(require("../service/ServicioLogin"));
const Login_1 = __importDefault(require("../model/Login"));
class ControladorLogin {
    static iniciarSesion(req, res) {
        try {
            console.log(req.body);
            const { correo, clave } = req.body;
            if (!correo || !clave) {
                res.status(400).json({
                    respuesta: "Correo y clave son requeridos",
                    autenticado: false,
                });
                return;
            }
            // Crear objeto Login solo con correo y clave
            const objLogin = new Login_1.default(correo, clave);
            ServicioLogin_1.default.validarCredenciales(objLogin, res);
        }
        catch (error) {
            console.error("Error en controlador de login:", error);
            res.status(500).json({
                respuesta: "Error en el servidor",
                autenticado: false,
            });
        }
    }
}
exports.default = ControladorLogin;
