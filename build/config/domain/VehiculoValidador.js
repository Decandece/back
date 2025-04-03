"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// VehiculoValidador.ts
const express_validator_1 = require("express-validator");
class VehiculoValidador {
    constructor() {
        this.validarCrearVehiculo = [
            (0, express_validator_1.check)("codTipoVehiculo").isNumeric().withMessage("El código de tipo de vehículo debe ser numérico"),
            (0, express_validator_1.check)("codUsuario").isNumeric().withMessage("El código de usuario debe ser numérico"), (0, express_validator_1.check)("placaVehiculo").notEmpty().withMessage("Se requiere la placa del vehículo")
                .isString().withMessage("La placa debe ser una cadena de texto"),
        ];
        this.validarActualizarVehiculo = [
            (0, express_validator_1.check)("codVehiculo").isNumeric().withMessage("El código de vehículo debe ser numérico"),
            (0, express_validator_1.check)("codTipoVehiculo").isNumeric().withMessage("El código de tipo de vehículo debe ser numérico"),
            (0, express_validator_1.check)("codUsuario").isNumeric().withMessage("El código de usuario debe ser numérico"),
            (0, express_validator_1.check)("placaVehiculo").notEmpty().withMessage("Se requiere la placa del vehículo").isString().withMessage("La placa debe ser una cadena de texto"),
        ];
        this.validarBorrarVehiculo = [
            (0, express_validator_1.check)("codVehiculo").isNumeric().withMessage("El código de vehículo debe ser numérico"),
        ];
    }
}
const vehiculoValidador = new VehiculoValidador();
exports.default = vehiculoValidador;
