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
const sql_usuario_1 = require("../repository/sql_usuario");
class ServicioUsuarioActualizar {
    static actualizarUsuario(objUsuario, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let objActualizado;
                // Utilizamos la consulta desde la persistencia
                const documentos = yield consulta.oneOrNone(sql_usuario_1.SQL_USUARIO.CHECK_DOCUMENTO_UPDATE, [objUsuario.documentoUsuario, objUsuario.codUsuario]);
                if (documentos.cantidad == 0) {
                    caso = 2;
                    objActualizado = yield consulta.result(sql_usuario_1.SQL_USUARIO.UPDATE, [
                        objUsuario.codRol,
                        objUsuario.documentoUsuario,
                        objUsuario.nombresUsuario,
                        objUsuario.apellidosUsuario,
                        objUsuario.generoUsuario,
                        objUsuario.fechaNacimientoUsuario,
                        objUsuario.telefonoUsuario,
                        objUsuario.codUsuario,
                    ]);
                }
                return { caso, objActualizado };
            }))
                .then(({ caso, objActualizado }) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({
                            respuesta: "Ya existe otro usuario con ese documento",
                        });
                        break;
                    default:
                        res.status(200).json({
                            respuesta: "Usuario actualizado correctamente",
                            detalle: objActualizado.rowCount,
                        });
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error en la actualización" });
            });
        });
    }
}
exports.default = ServicioUsuarioActualizar;
