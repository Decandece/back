import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_VEHICULO } from "../repository/sql_tipo_vehiculo";

class ServicioTipoVehiculoConsulta {
  public static async obtenerTodos(res: Response): Promise<any> {
    await pool
      .result(SQL_TIPO_VEHICULO.FIND_ALL)
      .then((misDatos) => {
        res.status(200).json(misDatos.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error en la consulta SQL" });
      });
  }

  public static async obtenerPorId(res: Response, id: number): Promise<any> {
    await pool
      .oneOrNone(SQL_TIPO_VEHICULO.FIND_BY_ID, [id])
      .then((resultado) => {
        if (resultado) {
          res.status(200).json(resultado);
        } else {
          res.status(404).json({ respuesta: "Tipo de vehículo no encontrado" });
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error en la consulta SQL" });
      });
  }
}
export default ServicioTipoVehiculoConsulta;
