"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// RutasUsuario.ts
const express_1 = require("express");
const ControladorUsuarioCrear_1 = __importDefault(require("../controller/ControladorUsuarioCrear"));
const ControladorUsuarioActualizar_1 = __importDefault(require("../controller/ControladorUsuarioActualizar"));
const ControladorUsuarioBorrar_1 = __importDefault(require("../controller/ControladorUsuarioBorrar"));
const ControladorUsuarioConsulta_1 = __importDefault(require("../controller/ControladorUsuarioConsulta"));
const UsuarioValidador_1 = __importDefault(require("../../../config/domain/UsuarioValidador"));
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
class RutasUsuario {
    constructor() {
        this.rutasUsuarioAPI = (0, express_1.Router)();
        this.configurarRutas();
    }
    configurarRutas() {
        // Ruta para obtener todos los usuarios
        this.rutasUsuarioAPI.get("/getall", ControladorUsuarioConsulta_1.default.llamarObtenerTodos);
        // Ruta para obtener usuario por ID
        this.rutasUsuarioAPI.get("/get/:codUsuario", ControladorUsuarioConsulta_1.default.llamarObtenerPorId);
        // Ruta para obtener usuarios por rol
        this.rutasUsuarioAPI.get("/rol/:codRol", ControladorUsuarioConsulta_1.default.llamarObtenerPorRol);
        // Ruta para crear un usuario - CON VALIDACIÓN
        this.rutasUsuarioAPI.post("/add", UsuarioValidador_1.default.validarCrearUsuario, ValidarDatos_1.default.ahora, ControladorUsuarioCrear_1.default.llamarGrabarUsuario);
        // Ruta para actualizar un usuario - CON VALIDACIÓN
        this.rutasUsuarioAPI.put("/update", UsuarioValidador_1.default.validarActualizarUsuario, ValidarDatos_1.default.ahora, ControladorUsuarioActualizar_1.default.llamarActualizar);
        // Ruta para eliminar un usuario - CON VALIDACIÓN
        this.rutasUsuarioAPI.delete("/delete/:codUsuario", UsuarioValidador_1.default.validarBorrarUsuario, ValidarDatos_1.default.ahora, ControladorUsuarioBorrar_1.default.llamarBorrar);
    }
}
const rutasUsuario = new RutasUsuario();
exports.default = rutasUsuario.rutasUsuarioAPI;
