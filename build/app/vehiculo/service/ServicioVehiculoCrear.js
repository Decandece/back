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
const sql_vehiculo_1 = require("../repository/sql_vehiculo");
const dbConnection_1 = __importDefault(require("../../../config/connection/dbConnection"));
class ServicioVehiculoCrear {
    static grabarVehiculo(obj, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let objGrabado;
                const placas = yield consulta.one(sql_vehiculo_1.SQL_VEHICULO.CHECK_PLACA, [
                    obj.placaVehiculo,
                ]);
                if (placas.cantidad == 0) {
                    caso = 2;
                    objGrabado = yield consulta.one(sql_vehiculo_1.SQL_VEHICULO.ADD, [
                        obj.codTipoVehiculo,
                        obj.codUsuario,
                        obj.placaVehiculo,
                    ]);
                }
                return { caso, objGrabado };
            }))
                .then(({ caso, objGrabado }) => {
                switch (caso) {
                    case 1:
                        res
                            .status(400)
                            .json({ respuesta: "Ya existe un vehículo con esa placa" });
                        break;
                    default:
                        res.status(200).json({ objGrabado });
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "Error en la consulta SQL" });
            });
        });
    }
}
exports.default = ServicioVehiculoCrear;
