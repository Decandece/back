// VehiculoValidador.ts
import { check } from "express-validator";

class VehiculoValidador {
  public validarCrearVehiculo = [
    check("codTipoVehiculo").isNumeric().withMessage("El código de tipo de vehículo debe ser numérico"),
    check("codUsuario").isNumeric().withMessage("El código de usuario debe ser numérico"), check("placaVehiculo").notEmpty().withMessage("Se requiere la placa del vehículo")
      .isString().withMessage("La placa debe ser una cadena de texto"),
  ];

  public validarActualizarVehiculo = [
    check("codVehiculo").isNumeric().withMessage("El código de vehículo debe ser numérico"),
    check("codTipoVehiculo").isNumeric().withMessage("El código de tipo de vehículo debe ser numérico"),
    check("codUsuario").isNumeric().withMessage("El código de usuario debe ser numérico"),
    check("placaVehiculo").notEmpty().withMessage("Se requiere la placa del vehículo").isString().withMessage("La placa debe ser una cadena de texto"),
  ];

  public validarBorrarVehiculo = [
    check("codVehiculo").isNumeric().withMessage("El código de vehículo debe ser numérico"),
  ];
}

const vehiculoValidador = new VehiculoValidador();
export default vehiculoValidador;