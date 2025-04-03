// ServicioTipoVehiculoActualizar.ts
import pool from "../../../config/connection/dbConnection";
import TipoVehiculo from "../model/TipoVehiculo";
import { Response } from "express";
import { SQL_TIPO_VEHICULO } from "../repository/sql_tipo_vehiculo";

class ServicioTipoVehiculoActualizar {
  public static async actualizarTipoVehiculo(
    objTipoVehiculo: TipoVehiculo,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objActualizado: any;

        const tipos = await consulta.one(SQL_TIPO_VEHICULO.HOW_MANY, [
          objTipoVehiculo.claseTipoVehiculo,
        ]);
        if (tipos.cantidad == 0) {
          caso = 2;
          objActualizado = await consulta.result(SQL_TIPO_VEHICULO.UPDATE, [
            objTipoVehiculo.claseTipoVehiculo,
            objTipoVehiculo.codTipoVehiculo,
          ]);
        }
        return { caso, objActualizado };
      })
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
  }
}
export default ServicioTipoVehiculoActualizar;
