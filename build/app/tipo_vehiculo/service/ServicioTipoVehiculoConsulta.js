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
const sql_tipo_vehiculo_1 = require("../repository/sql_tipo_vehiculo");
class ServicioTipoVehiculoConsulta {
    static obtenerTodos(res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(sql_tipo_vehiculo_1.SQL_TIPO_VEHICULO.FIND_ALL)
                .then((misDatos) => {
                res.status(200).json(misDatos.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error en la consulta SQL" });
            });
        });
    }
    static obtenerPorId(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .oneOrNone(sql_tipo_vehiculo_1.SQL_TIPO_VEHICULO.FIND_BY_ID, [id])
                .then((resultado) => {
                if (resultado) {
                    res.status(200).json(resultado);
                }
                else {
                    res.status(404).json({ respuesta: "Tipo de vehículo no encontrado" });
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error en la consulta SQL" });
            });
        });
    }
}
exports.default = ServicioTipoVehiculoConsulta;
