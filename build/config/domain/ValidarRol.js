"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosRolActualizar = exports.datoRolBorrar = exports.datosRolCrear = void 0;
const express_validator_1 = require("express-validator");
exports.datosRolCrear = [
    (0, express_validator_1.body)("nombreRol", "Rol requerido").not().isEmpty(),
    (0, express_validator_1.body)("nombreRol", "Minimo 5 caracteres").isLength({ min: 5 }),
];
exports.datoRolBorrar = [
    (0, express_validator_1.param)("codRol", "Debe ser un número").isInt(),
    (0, express_validator_1.param)("codRol", "Maximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosRolActualizar = [
    (0, express_validator_1.body)("codRol", "Rol requerido").not().isEmpty(),
    (0, express_validator_1.body)("codRol", "Codigo Rol debe ser un número").isInt(),
    (0, express_validator_1.body)("nombreRol", "Rol requerido").not().isEmpty(),
    (0, express_validator_1.body)("nombreRol", "Minimo 5 caracteres").isLength({ min: 5 }),
];
