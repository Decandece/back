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
class ServicioTipoVehiculoBorrar {
    static borrar(obj, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultado = yield dbConnection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                    // Verificar si existen vehículos asociados a este tipo
                    const vehiculosAsociados = yield consulta.oneOrNone("SELECT COUNT(v.cod_vehiculo) as cantidad FROM vehiculos v WHERE v.cod_tipo_vehiculo = $1", [obj.codTipoVehiculo]);
                    // Si hay vehículos asociados, no permitir la eliminación
                    if (vehiculosAsociados && parseInt(vehiculosAsociados.cantidad) > 0) {
                        return {
                            eliminado: false,
                            vehiculosAsociados: vehiculosAsociados.cantidad,
                        };
                    }
                    // Si no hay vehículos asociados, proceder con la eliminación
                    const resultado = yield consulta.result(sql_tipo_vehiculo_1.SQL_TIPO_VEHICULO.DELETE, [
                        obj.codTipoVehiculo,
                    ]);
                    return { eliminado: true, filasBorradas: resultado.rowCount };
                }));
                // Manejar el resultado de la eliminación
                if (!resultado.eliminado) {
                    return res.status(400).json({
                        respuesta: "No se puede eliminar este tipo de vehículo",
                        detalle: `No podemos eliminar el tipo de vehículo debido a que hay ${resultado.vehiculosAsociados} vehículo(s) asociado(s) a este tipo. Por favor, reasigne o elimine estos vehículos primero.`,
                    });
                }
                // Eliminación exitosa
                res.status(200).json({
                    respuesta: "Tipo de vehículo eliminado correctamente",
                    "Filas borradas": resultado.filasBorradas,
                });
            }
            catch (miError) {
                console.error("Error al eliminar tipo de vehículo:", miError);
                // Manejo específico de error de clave foránea
                if (miError.code === "23503" &&
                    miError.constraint === "fk_vehiculo_ref_tiposvehi") {
                    return res.status(400).json({
                        respuesta: "No se puede eliminar este tipo de vehículo",
                        detalle: "No podemos eliminar el tipo de vehículo debido a que hay vehículos asociados a este tipo. Por favor, reasigne o elimine estos vehículos primero.",
                        codigoError: miError.code,
                    });
                }
                // Manejo de otros errores
                res.status(500).json({
                    respuesta: "Error interno al eliminar el tipo de vehículo",
                    detalle: miError.message || "Error desconocido",
                });
            }
        });
    }
}
exports.default = ServicioTipoVehiculoBorrar;
