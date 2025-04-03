import { Response } from "express";
import Vehiculo from "../model/Vehiculo";
import { SQL_VEHICULO } from "../repository/sql_vehiculo";
import pool from "../../../config/connection/dbConnection";

class ServicioVehiculoCrear {
  public static async grabarVehiculo(
    obj: Vehiculo,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objGrabado: any;
        const placas = await consulta.one(SQL_VEHICULO.CHECK_PLACA, [
          obj.placaVehiculo,
        ]);
        if (placas.cantidad == 0) {
          caso = 2;
          objGrabado = await consulta.one(SQL_VEHICULO.ADD, [
            obj.codTipoVehiculo,
            obj.codUsuario,
            obj.placaVehiculo,
          ]);
        }
        return { caso, objGrabado };
      })
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
  }
}
export default ServicioVehiculoCrear;
