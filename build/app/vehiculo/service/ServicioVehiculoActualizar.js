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
const sql_vehiculo_1 = require("../repository/sql_vehiculo");
class ServicioVehiculoActualizar {
    static actualizarVehiculo(objVehiculo, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let objActualizado;
                // Verificar si la placa ya existe para otro vehículo
                const placas = yield consulta.oneOrNone("SELECT COUNT(v.cod_vehiculo) as cantidad FROM vehiculos v \
          WHERE v.placa_vehiculo = $1 AND v.cod_vehiculo != $2", [objVehiculo.placaVehiculo, objVehiculo.codVehiculo]);
                if (placas.cantidad == 0) {
                    caso = 2;
                    objActualizado = yield consulta.result(sql_vehiculo_1.SQL_VEHICULO.UPDATE, [
                        objVehiculo.codTipoVehiculo,
                        objVehiculo.codUsuario,
                        objVehiculo.placaVehiculo,
                        objVehiculo.codVehiculo,
                    ]);
                }
                return { caso, objActualizado };
            }))
                .then(({ caso, objActualizado }) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({
                            respuesta: "Ya existe otro vehículo con esa placa",
                        });
                        break;
                    default:
                        res.status(200).json({
                            respuesta: "Vehículo actualizado correctamente",
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
exports.default = ServicioVehiculoActualizar;
