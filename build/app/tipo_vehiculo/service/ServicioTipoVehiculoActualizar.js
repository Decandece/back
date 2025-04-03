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
// ServicioTipoVehiculoActualizar.ts
const dbConnection_1 = __importDefault(require("../../../config/connection/dbConnection"));
const sql_tipo_vehiculo_1 = require("../repository/sql_tipo_vehiculo");
class ServicioTipoVehiculoActualizar {
    static actualizarTipoVehiculo(objTipoVehiculo, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let objActualizado;
                const tipos = yield consulta.one(sql_tipo_vehiculo_1.SQL_TIPO_VEHICULO.HOW_MANY, [
                    objTipoVehiculo.claseTipoVehiculo,
                ]);
                if (tipos.cantidad == 0) {
                    caso = 2;
                    objActualizado = yield consulta.result(sql_tipo_vehiculo_1.SQL_TIPO_VEHICULO.UPDATE, [
                        objTipoVehiculo.claseTipoVehiculo,
                        objTipoVehiculo.codTipoVehiculo,
                    ]);
                }
                return { caso, objActualizado };
            }))
                .then(({ caso, objActualizado }) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({
                            respuesta: "Ya existe un tipo de vehículo con ese nombre",
                        });
                        break;
                    default:
                        res.status(200).json({
                            respuesta: "Tipo de vehículo actualizado correctamente",
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
exports.default = ServicioTipoVehiculoActualizar;
