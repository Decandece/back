"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class LoginValidador {
    constructor() {
        this.validarLogin = [
            (0, express_validator_1.check)("correo")
                .notEmpty()
                .withMessage("El correo es requerido")
                .isEmail()
                .withMessage("Debe ser un correo electrónico válido"),
            (0, express_validator_1.check)("clave")
                .notEmpty()
                .withMessage("La clave es requerida")
                .isLength({ min: 6 })
                .withMessage("La clave debe tener al menos 6 caracteres"),
        ];
    }
}
const loginValidador = new LoginValidador();
exports.default = loginValidador;
