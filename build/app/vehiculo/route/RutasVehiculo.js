"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// RutasVehiculo.ts
const express_1 = require("express");
const ControladorVehiculoCrear_1 = __importDefault(require("../controller/ControladorVehiculoCrear"));
const ControladorVehiculoActualizar_1 = __importDefault(require("../controller/ControladorVehiculoActualizar"));
const ControladorVehiculoBorrar_1 = __importDefault(require("../controller/ControladorVehiculoBorrar"));
const ControladorVehiculoConsulta_1 = __importDefault(require("../controller/ControladorVehiculoConsulta"));
const VehiculoValidador_1 = __importDefault(require("../../../config/domain/VehiculoValidador"));
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
class RutasVehiculo {
    constructor() {
        this.rutasVehiculoAPI = (0, express_1.Router)();
        this.configurarRutas();
    }
    configurarRutas() {
        // Ruta para obtener todos los vehículos
        this.rutasVehiculoAPI.get("/getall", ControladorVehiculoConsulta_1.default.llamarObtenerTodos);
        // Ruta para obtener vehículo por ID
        this.rutasVehiculoAPI.get("/get/:codVehiculo", ControladorVehiculoConsulta_1.default.llamarObtenerPorId);
        // Ruta para obtener vehículos por usuario
        this.rutasVehiculoAPI.get("/usuario/:codUsuario", ControladorVehiculoConsulta_1.default.llamarObtenerPorUsuario);
        // Ruta para obtener vehículos por tipo
        this.rutasVehiculoAPI.get("/tipo/:codTipoVehiculo", ControladorVehiculoConsulta_1.default.llamarObtenerPorTipo);
        // Nueva ruta para obtener vehículo por placa
        this.rutasVehiculoAPI.get("/placa/:placa", ControladorVehiculoConsulta_1.default.llamarObtenerPorPlaca);
        // Ruta para crear un vehículo - CON VALIDACIÓN
        this.rutasVehiculoAPI.post("/add", VehiculoValidador_1.default.validarCrearVehiculo, ValidarDatos_1.default.ahora, ControladorVehiculoCrear_1.default.llamarGrabarVehiculo);
        // Ruta para actualizar un vehículo - CON VALIDACIÓN
        this.rutasVehiculoAPI.put("/update", VehiculoValidador_1.default.validarActualizarVehiculo, ValidarDatos_1.default.ahora, ControladorVehiculoActualizar_1.default.llamarActualizar);
        // Ruta para eliminar un vehículo - CON VALIDACIÓN
        this.rutasVehiculoAPI.delete("/delete/:codVehiculo", VehiculoValidador_1.default.validarBorrarVehiculo, ValidarDatos_1.default.ahora, ControladorVehiculoBorrar_1.default.llamarBorrar);
    }
}
const rutasVehiculo = new RutasVehiculo();
exports.default = rutasVehiculo.rutasVehiculoAPI;
