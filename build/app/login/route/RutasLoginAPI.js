"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorLogin_1 = __importDefault(require("../controller/ControladorLogin"));
const LoginValidador_1 = __importDefault(require("../../../config/domain/LoginValidador"));
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
class RutasLogin {
    constructor() {
        this.rutaLoginAPI = (0, express_1.Router)();
        this.controladorLogin = new ControladorLogin_1.default();
        this.validador = new LoginValidador_1.default();
        this.configurarRutas();
    }
    configurarRutas() {
        // In the configurarRutas method
        this.rutaLoginAPI.post("/", this.validador.validarLogin, ValidarDatos_1.default.ahora, ControladorLogin_1.default.iniciarSesion // Use static method
        );
    }
}
// Change this line to match the pattern used in other route files
const rutasLogin = new RutasLogin();
exports.default = rutasLogin.rutaLoginAPI;
