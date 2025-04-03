"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = __importDefault(require("../../../config/connection/dbConnection"));
const sql_login_1 = require("../repository/sql_login");
const Login_1 = require("../entity/Login");
class ServicioLogin {
    static validarUsuario(login, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                // Verificamos directamente con la consulta VALIDATE que une todas las tablas
                const usuario = yield consulta.oneOrNone(sql_login_1.SQL_LOGIN.VALIDATE, [
                    login.correo,
                    login.clave,
                ]);
                if (!usuario) {
                    return { usuario: null };
                }
                try {
                    // Registrar ingreso con el código de usuario
                    const ingreso = yield consulta.one(sql_login_1.SQL_LOGIN.REGISTER_LOGIN, [
                        usuario.codUsuario,
                    ]);
                    return {
                        usuario,
                        codIngreso: ingreso.cod_ingreso
                    };
                }
                catch (error) {
                    // Si hay un error al registrar el ingreso, devolvemos un objeto con información del error
                    return {
                        usuario: null,
                        error: "Error al registrar el ingreso del usuario"
                    };
                }
            }))
                .then((resultado) => {
                if (resultado.error) {
                    return res.status(500).json({
                        respuesta: resultado.error
                    });
                }
                if (resultado.usuario) {
                    const respuesta = new Login_1.LoginResponse(resultado.usuario.codUsuario, resultado.usuario.nombresUsuario, resultado.usuario.apellidosUsuario, resultado.usuario.nombreRol);
                    res.status(200).json({
                        mensaje: "Inicio de sesión exitoso",
                        usuario: respuesta,
                        codIngreso: resultado.codIngreso
                    });
                }
                else {
                    res.status(401).json({
                        respuesta: "Credenciales incorrectas"
                    });
                }
            })
                .catch((error) => {
                // Manejo de errores más específico
                let mensajeError = "Error en el servidor";
                if (error.code === '23502') {
                    mensajeError = "Error de validación: Datos incompletos";
                }
                else if (error.code === '23503') {
                    mensajeError = "Error de referencia: El usuario no existe";
                }
                res.status(500).json({
                    respuesta: "Error en el proceso de autenticación",
                    detalle: mensajeError
                });
            });
        });
    }
}
exports.default = ServicioLogin;
