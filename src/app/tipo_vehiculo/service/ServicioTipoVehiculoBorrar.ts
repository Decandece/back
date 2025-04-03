import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import TipoVehiculo from "../model/TipoVehiculo";
import { SQL_TIPO_VEHICULO } from "../repository/sql_tipo_vehiculo";

class ServicioTipoVehiculoBorrar {
  public static async borrar(obj: TipoVehiculo, res: Response): Promise<any> {
    try {
      const resultado = await pool.task(async (consulta) => {
        // Verificar si existen vehículos asociados a este tipo
        const vehiculosAsociados = await consulta.oneOrNone(
          "SELECT COUNT(v.cod_vehiculo) as cantidad FROM vehiculos v WHERE v.cod_tipo_vehiculo = $1",
          [obj.codTipoVehiculo]
        );

        // Si hay vehículos asociados, no permitir la eliminación
        if (vehiculosAsociados && parseInt(vehiculosAsociados.cantidad) > 0) {
          return {
            eliminado: false,
            vehiculosAsociados: vehiculosAsociados.cantidad,
          };
        }

        // Si no hay vehículos asociados, proceder con la eliminación
        const resultado = await consulta.result(SQL_TIPO_VEHICULO.DELETE, [
          obj.codTipoVehiculo,
        ]);
        return { eliminado: true, filasBorradas: resultado.rowCount };
      });

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
    } catch (miError: any) {
      console.error("Error al eliminar tipo de vehículo:", miError);

      // Manejo específico de error de clave foránea
      if (
        miError.code === "23503" &&
        miError.constraint === "fk_vehiculo_ref_tiposvehi"
      ) {
        return res.status(400).json({
          respuesta: "No se puede eliminar este tipo de vehículo",
          detalle:
            "No podemos eliminar el tipo de vehículo debido a que hay vehículos asociados a este tipo. Por favor, reasigne o elimine estos vehículos primero.",
          codigoError: miError.code,
        });
      }

      // Manejo de otros errores
      res.status(500).json({
        respuesta: "Error interno al eliminar el tipo de vehículo",
        detalle: miError.message || "Error desconocido",
      });
    }
  }
}

export default ServicioTipoVehiculoBorrar;
