import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_VEHICULO } from "../repository/sql_vehiculo";

class ServicioVehiculoConsulta {
  public static async obtenerTodos(res: Response): Promise<any> {
    await pool
      .result(SQL_VEHICULO.FIND_ALL)
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
      .oneOrNone(SQL_VEHICULO.FIND_BY_ID, [id])
      .then((resultado) => {
        if (resultado) {
          res.status(200).json(resultado);
        } else {
          res.status(404).json({ respuesta: "Vehículo no encontrado" });
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error en la consulta SQL" });
      });
  }

  public static async obtenerPorUsuario(
    res: Response,
    idUsuario: number
  ): Promise<any> {
    await pool
      .result(SQL_VEHICULO.FIND_BY_USUARIO, [idUsuario])
      .then((misDatos) => {
        res.status(200).json(misDatos.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error en la consulta SQL" });
      });
  }

  public static async obtenerPorTipo(
    res: Response,
    idTipo: number
  ): Promise<any> {
    await pool
      .result(SQL_VEHICULO.FIND_BY_TIPO, [idTipo])
      .then((misDatos) => {
        res.status(200).json(misDatos.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error en la consulta SQL" });
      });
  }
  
  public static async obtenerPorPlaca(
    res: Response,
    placa: string
  ): Promise<any> {
    await pool
      .oneOrNone(SQL_VEHICULO.FIND_BY_PLACA, [placa])
      .then((resultado) => {
        if (resultado) {
          res.status(200).json(resultado);
        } else {
          res.status(404).json({ respuesta: "No se encontró vehículo con esa placa" });
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error en la consulta SQL" });
      });
  }
}
export default ServicioVehiculoConsulta;
