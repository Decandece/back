// ServicioTipoVehiculoCrear.ts
import { Response } from "express";
import TipoVehiculo from "../model/TipoVehiculo";
import { SQL_TIPO_VEHICULO } from "../repository/sql_tipo_vehiculo";
import pool from "../../../config/connection/dbConnection";

class ServicioTipoVehiculoCrear {
  public static async grabarTipoVehiculo(
    obj: TipoVehiculo,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objGrabado: any;
        const tipos = await consulta.one(SQL_TIPO_VEHICULO.HOW_MANY, [
          obj.claseTipoVehiculo,
        ]);
        if (tipos.cantidad == 0) {
          caso = 2;
          objGrabado = await consulta.one(SQL_TIPO_VEHICULO.ADD, [
            obj.claseTipoVehiculo,
          ]);
        }
        return { caso, objGrabado };
      })
      .then(({ caso, objGrabado }) => {
        switch (caso) {
          case 1:
            res
              .status(400)
              .json({ respuesta: "El tipo de vehículo ya existe" });
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
export default ServicioTipoVehiculoCrear;
