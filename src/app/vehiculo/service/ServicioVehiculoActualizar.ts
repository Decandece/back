import pool from "../../../config/connection/dbConnection";
import Vehiculo from "../model/Vehiculo";
import { Response } from "express";
import { SQL_VEHICULO } from "../repository/sql_vehiculo";

class ServicioVehiculoActualizar {
  public static async actualizarVehiculo(
    objVehiculo: Vehiculo,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objActualizado: any;

        // Verificar si la placa ya existe para otro vehículo
        const placas = await consulta.oneOrNone(
          "SELECT COUNT(v.cod_vehiculo) as cantidad FROM vehiculos v \
          WHERE v.placa_vehiculo = $1 AND v.cod_vehiculo != $2",
          [objVehiculo.placaVehiculo, objVehiculo.codVehiculo]
        );

        if (placas.cantidad == 0) {
          caso = 2;
          objActualizado = await consulta.result(SQL_VEHICULO.UPDATE, [
            objVehiculo.codTipoVehiculo,
            objVehiculo.codUsuario,
            objVehiculo.placaVehiculo,
            objVehiculo.codVehiculo,
          ]);
        }
        return { caso, objActualizado };
      })
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
  }
}
export default ServicioVehiculoActualizar;
