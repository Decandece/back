// RutasTipoVehiculo.ts
import { Router } from "express";
import controladorTipoVehiculoCrear from "../controller/ControladorTipoVehiculoCrear";
import controladorTipoVehiculoActualizar from "../controller/ControladorTipoVehiculoActualizar";
import controladorTipoVehiculoBorrar from "../controller/ControladorTipoVehiculoBorrar";
import controladorTipoVehiculoConsulta from "../controller/ControladorTipoVehiculoConsulta";
import tipoVehiculoValidador from "../../../config/domain/TipoVehiculoValidar";
import validarDatos from "../../../middleware/ValidarDatos";

class RutasTipoVehiculo {
  public rutasTipoVehiculoAPI: Router;

  constructor() {
    this.rutasTipoVehiculoAPI = Router();
    this.configurarRutas();
  }

  public configurarRutas(): void {
    // Ruta para obtener todos los tipos de vehículos
    this.rutasTipoVehiculoAPI.get("/getall",
      controladorTipoVehiculoConsulta.llamarObtenerTodos);

    // Ruta para obtener tipo de vehículo por ID
    this.rutasTipoVehiculoAPI.get("/get/:codTipoVehiculo",
      controladorTipoVehiculoConsulta.llamarObtenerPorId);

    // Ruta para crear un tipo de vehículo - CON VALIDACIÓN
    this.rutasTipoVehiculoAPI.post("/add",
      tipoVehiculoValidador.validarCrearTipoVehiculo,
      validarDatos.ahora,
      controladorTipoVehiculoCrear.llamarGrabarTipoVehiculo);

    // Ruta para actualizar un tipo de vehículo - CON VALIDACIÓN
    this.rutasTipoVehiculoAPI.put("/update",
      tipoVehiculoValidador.validarActualizarTipoVehiculo,
      validarDatos.ahora,
      controladorTipoVehiculoActualizar.llamarActualizar);

    // Ruta para eliminar un tipo de vehículo - CON VALIDACIÓN
    this.rutasTipoVehiculoAPI.delete("/delete/:codTipoVehiculo",
      tipoVehiculoValidador.validarBorrarTipoVehiculo,
      validarDatos.ahora,
      controladorTipoVehiculoBorrar.llamarBorrar);
  }
}

const rutasTipoVehiculo = new RutasTipoVehiculo();
export default rutasTipoVehiculo.rutasTipoVehiculoAPI;
