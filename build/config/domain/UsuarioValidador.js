"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class UsuarioValidador {
    constructor() {
        this.validarCrearUsuario = [
            (0, express_validator_1.check)("codRol")
                .isNumeric()
                .withMessage("El código de rol debe ser numérico"),
            (0, express_validator_1.check)("documentoUsuario")
                .notEmpty()
                .withMessage("Se requiere el documento del usuario")
                .isString()
                .withMessage("El documento debe ser una cadena de texto"),
            (0, express_validator_1.check)("nombresUsuario")
                .notEmpty()
                .withMessage("Se requieren los nombres del usuario")
                .isString()
                .withMessage("Los nombres deben ser una cadena de texto"),
            (0, express_validator_1.check)("apellidosUsuario")
                .notEmpty()
                .withMessage("Se requieren los apellidos del usuario")
                .isString()
                .withMessage("Los apellidos deben ser una cadena de texto"),
            (0, express_validator_1.check)("generoUsuario")
                .notEmpty()
                .withMessage("Se requiere el género del usuario")
                .isString()
                .withMessage("El género debe ser una cadena de texto"),
            (0, express_validator_1.check)("fechaNacimientoUsuario")
                .notEmpty()
                .withMessage("Se requiere la fecha de nacimiento")
                .isDate()
                .withMessage("Debe ser una fecha válida"),
            (0, express_validator_1.check)("telefonoUsuario")
                .notEmpty()
                .withMessage("Se requiere el teléfono del usuario")
                .isString()
                .withMessage("El teléfono debe ser una cadena de texto"),
        ];
        this.validarActualizarUsuario = [
            (0, express_validator_1.check)("codUsuario")
                .isNumeric()
                .withMessage("El código de usuario debe ser numérico"),
            (0, express_validator_1.check)("codRol")
                .isNumeric()
                .withMessage("El código de rol debe ser numérico"),
            (0, express_validator_1.check)("documentoUsuario")
                .notEmpty()
                .withMessage("Se requiere el documento del usuario")
                .isString()
                .withMessage("El documento debe ser una cadena de texto"),
            (0, express_validator_1.check)("nombresUsuario")
                .notEmpty()
                .withMessage("Se requieren los nombres del usuario")
                .isString()
                .withMessage("Los nombres deben ser una cadena de texto"),
            (0, express_validator_1.check)("apellidosUsuario")
                .notEmpty()
                .withMessage("Se requieren los apellidos del usuario")
                .isString()
                .withMessage("Los apellidos deben ser una cadena de texto"),
            (0, express_validator_1.check)("generoUsuario")
                .notEmpty()
                .withMessage("Se requiere el género del usuario")
                .isString()
                .withMessage("El género debe ser una cadena de texto"),
            (0, express_validator_1.check)("fechaNacimientoUsuario")
                .notEmpty()
                .withMessage("Se requiere la fecha de nacimiento")
                .isDate()
                .withMessage("Debe ser una fecha válida"),
            (0, express_validator_1.check)("telefonoUsuario")
                .notEmpty()
                .withMessage("Se requiere el teléfono del usuario")
                .isString()
                .withMessage("El teléfono debe ser una cadena de texto"),
        ];
        this.validarBorrarUsuario = [
            (0, express_validator_1.check)("codUsuario")
                .isNumeric()
                .withMessage("El código de usuario debe ser numérico"),
        ];
    }
}
const usuarioValidador = new UsuarioValidador();
exports.default = usuarioValidador;
