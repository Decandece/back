// TipoVehiculoValidador.ts
import { check } from "express-validator";

class TipoVehiculoValidador {
  public validarCrearTipoVehiculo = [
    check("claseTipoVehiculo").notEmpty().withMessage("Se requiere la clase del tipo de vehículo")
      .isString().withMessage("La clase debe ser una cadena de texto"),
  ];

  public validarActualizarTipoVehiculo = [
    check("codTipoVehiculo").isNumeric().withMessage("El código de tipo de vehículo debe ser numérico"),
    check("claseTipoVehiculo").notEmpty().withMessage("Se requiere la clase del tipo de vehículo")
      .isString().withMessage("La clase debe ser una cadena de texto"),
  ];

  public validarBorrarTipoVehiculo = [
    check("codTipoVehiculo").isNumeric().withMessage("El código de tipo de vehículo debe ser numérico"),
  ];
}

const tipoVehiculoValidador = new TipoVehiculoValidador();
export default tipoVehiculoValidador;