"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// RutasTipoVehiculo.ts
const express_1 = require("express");
const ControladorTipoVehiculoCrear_1 = __importDefault(require("../controller/ControladorTipoVehiculoCrear"));
const ControladorTipoVehiculoActualizar_1 = __importDefault(require("../controller/ControladorTipoVehiculoActualizar"));
const ControladorTipoVehiculoBorrar_1 = __importDefault(require("../controller/ControladorTipoVehiculoBorrar"));
const ControladorTipoVehiculoConsulta_1 = __importDefault(require("../controller/ControladorTipoVehiculoConsulta"));
const TipoVehiculoValidar_1 = __importDefault(require("../../../config/domain/TipoVehiculoValidar"));
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
class RutasTipoVehiculo {
    constructor() {
        this.rutasTipoVehiculoAPI = (0, express_1.Router)();
        this.configurarRutas();
    }
    configurarRutas() {
        // Ruta para obtener todos los tipos de vehículos
        this.rutasTipoVehiculoAPI.get("/getall", ControladorTipoVehiculoConsulta_1.default.llamarObtenerTodos);
        // Ruta para obtener tipo de vehículo por ID
        this.rutasTipoVehiculoAPI.get("/get/:codTipoVehiculo", ControladorTipoVehiculoConsulta_1.default.llamarObtenerPorId);
        // Ruta para crear un tipo de vehículo - CON VALIDACIÓN
        this.rutasTipoVehiculoAPI.post("/add", TipoVehiculoValidar_1.default.validarCrearTipoVehiculo, ValidarDatos_1.default.ahora, ControladorTipoVehiculoCrear_1.default.llamarGrabarTipoVehiculo);
        // Ruta para actualizar un tipo de vehículo - CON VALIDACIÓN
        this.rutasTipoVehiculoAPI.put("/update", TipoVehiculoValidar_1.default.validarActualizarTipoVehiculo, ValidarDatos_1.default.ahora, ControladorTipoVehiculoActualizar_1.default.llamarActualizar);
        // Ruta para eliminar un tipo de vehículo - CON VALIDACIÓN
        this.rutasTipoVehiculoAPI.delete("/delete/:codTipoVehiculo", TipoVehiculoValidar_1.default.validarBorrarTipoVehiculo, ValidarDatos_1.default.ahora, ControladorTipoVehiculoBorrar_1.default.llamarBorrar);
    }
}
const rutasTipoVehiculo = new RutasTipoVehiculo();
exports.default = rutasTipoVehiculo.rutasTipoVehiculoAPI;
