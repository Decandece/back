import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import Vehiculo from "../model/Vehiculo";
import { SQL_VEHICULO } from "../repository/sql_vehiculo";

class ServicioVehiculoBorrar {
  public static async borrar(obj: Vehiculo, res: Response): Promise<any> {
    await pool
      .task((consulta) => {
        return consulta.result(SQL_VEHICULO.DELETE, [obj.codVehiculo]);
      })
      .then((respuesta) => {
        res.status(200).json({
          respuesta: "Vehículo eliminado correctamente",
          "Filas borradas": respuesta.rowCount,
        });
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error eliminando el vehículo" });
      });
  }
}
export default ServicioVehiculoBorrar;
