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
const Ingreso_1 = __importDefault(require("../model/Ingreso"));
class ServicioLogin {
    static validarUsuario(acceso, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let usuario;
                let codIngreso;
                // Verificamos si existe el usuario con las credenciales proporcionadas
                usuario = yield consulta.oneOrNone(sql_login_1.SQL_LOGIN.VALIDATE, [
                    acceso.correoAcceso,
                    acceso.claveAcceso,
                ]);
                if (usuario) {
                    caso = 2;
                    // Actualizamos el codUsuario en el objeto acceso
                    acceso.codUsuario = usuario.codUsuario;
                    // Creamos un objeto Ingreso para registrar el ingreso
                    const fechaActual = new Date();
                    const ingresoTemp = new Ingreso_1.default(0, usuario.codUsuario, fechaActual, fechaActual);
                    // Registrar ingreso con el código de usuario
                    const ingresoResult = yield consulta.one(sql_login_1.SQL_LOGIN.REGISTER_LOGIN, [
                        ingresoTemp.codUsuario,
                    ]);
                    codIngreso = ingresoResult.cod_ingreso;
                    // Actualizamos el codIngreso en el objeto ingreso
                    ingresoTemp.codIngreso = codIngreso;
                }
                return { caso, usuario, codIngreso };
            }))
                .then(({ caso, usuario, codIngreso }) => {
                switch (caso) {
                    case 1:
                        res.status(401).json({
                            respuesta: "Credenciales incorrectas",
                        });
                        break;
                    default:
                        const respuesta = {
                            codUsuario: usuario.codUsuario,
                            nombresUsuario: usuario.nombresUsuario,
                            apellidosUsuario: usuario.apellidosUsuario,
                            nombreRol: usuario.nombreRol
                        };
                        res.status(200).json({
                            mensaje: "Inicio de sesión exitoso",
                            usuario: respuesta,
                            codIngreso: codIngreso,
                        });
                        break;
                }
            })
                .catch((miError) => {
                // Manejo de errores más específico
                let mensajeError = "Error en el servidor";
                if (miError.code === "23502") {
                    mensajeError = "Error de validación: Datos incompletos";
                }
                else if (miError.code === "23503") {
                    mensajeError = "Error de referencia: El usuario no existe";
                }
                console.error("Error en el servicio de login:", miError);
                res.status(500).json({
                    respuesta: mensajeError,
                });
            });
        });
    }
}
exports.default = ServicioLogin;
