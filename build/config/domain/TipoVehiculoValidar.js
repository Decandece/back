"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TipoVehiculoValidador.ts
const express_validator_1 = require("express-validator");
class TipoVehiculoValidador {
    constructor() {
        this.validarCrearTipoVehiculo = [
            (0, express_validator_1.check)("claseTipoVehiculo").notEmpty().withMessage("Se requiere la clase del tipo de vehículo")
                .isString().withMessage("La clase debe ser una cadena de texto"),
        ];
        this.validarActualizarTipoVehiculo = [
            (0, express_validator_1.check)("codTipoVehiculo").isNumeric().withMessage("El código de tipo de vehículo debe ser numérico"),
            (0, express_validator_1.check)("claseTipoVehiculo").notEmpty().withMessage("Se requiere la clase del tipo de vehículo")
                .isString().withMessage("La clase debe ser una cadena de texto"),
        ];
        this.validarBorrarTipoVehiculo = [
            (0, express_validator_1.check)("codTipoVehiculo").isNumeric().withMessage("El código de tipo de vehículo debe ser numérico"),
        ];
    }
}
const tipoVehiculoValidador = new TipoVehiculoValidador();
exports.default = tipoVehiculoValidador;
