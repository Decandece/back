// RutasVehiculo.ts
import { Router } from "express";
import controladorVehiculoCrear from "../controller/ControladorVehiculoCrear";
import controladorVehiculoActualizar from "../controller/ControladorVehiculoActualizar";
import controladorVehiculoBorrar from "../controller/ControladorVehiculoBorrar";
import controladorVehiculoConsulta from "../controller/ControladorVehiculoConsulta";
import vehiculoValidador from "../../../config/domain/VehiculoValidador";
import validarDatos from "../../../middleware/ValidarDatos";

class RutasVehiculo {
  public rutasVehiculoAPI: Router;

  constructor() {
    this.rutasVehiculoAPI = Router();
    this.configurarRutas();
  }

  public configurarRutas(): void {
    // Ruta para obtener todos los vehículos
    this.rutasVehiculoAPI.get("/getall",
      controladorVehiculoConsulta.llamarObtenerTodos
    );

    // Ruta para obtener vehículo por ID
    this.rutasVehiculoAPI.get("/get/:codVehiculo",
      controladorVehiculoConsulta.llamarObtenerPorId
    );

    // Ruta para obtener vehículos por usuario
    this.rutasVehiculoAPI.get("/usuario/:codUsuario",
      controladorVehiculoConsulta.llamarObtenerPorUsuario
    );

    // Ruta para obtener vehículos por tipo
    this.rutasVehiculoAPI.get("/tipo/:codTipoVehiculo",
      controladorVehiculoConsulta.llamarObtenerPorTipo
    );

    // Nueva ruta para obtener vehículo por placa
    this.rutasVehiculoAPI.get("/placa/:placa",
       controladorVehiculoConsulta.llamarObtenerPorPlaca
    );

    // Ruta para crear un vehículo - CON VALIDACIÓN
    this.rutasVehiculoAPI.post("/add",
      vehiculoValidador.validarCrearVehiculo,
      validarDatos.ahora,
      controladorVehiculoCrear.llamarGrabarVehiculo
    );

    // Ruta para actualizar un vehículo - CON VALIDACIÓN
    this.rutasVehiculoAPI.put(
      "/update",
      vehiculoValidador.validarActualizarVehiculo,
      validarDatos.ahora,
      controladorVehiculoActualizar.llamarActualizar
    );

    // Ruta para eliminar un vehículo - CON VALIDACIÓN
    this.rutasVehiculoAPI.delete(
      "/delete/:codVehiculo",
      vehiculoValidador.validarBorrarVehiculo,
      validarDatos.ahora,
      controladorVehiculoBorrar.llamarBorrar
    );
  }
}

const rutasVehiculo = new RutasVehiculo();
export default rutasVehiculo.rutasVehiculoAPI;
