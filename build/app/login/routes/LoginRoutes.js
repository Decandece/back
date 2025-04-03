"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = __importDefault(require("../controller/LoginController"));
const LoginValidador_1 = __importDefault(require("../../../config/domain/LoginValidador"));
class LoginRoutes {
    constructor() {
        this.rutaLoginAPI = (0, express_1.Router)();
        this.configurarRutas();
    }
    configurarRutas() {
        this.rutaLoginAPI.post("/iniciar", LoginValidador_1.default.validarLogin, LoginController_1.default.iniciarSesion);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.rutaLoginAPI;
