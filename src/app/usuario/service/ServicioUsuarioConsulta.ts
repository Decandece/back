import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_USUARIO } from "../repository/sql_usuario";

class ServicioUsuarioConsulta {
  public static async obtenerTodos(res: Response): Promise<any> {
    await pool
      .result(SQL_USUARIO.FIND_ALL)
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
      .oneOrNone(SQL_USUARIO.FIND_BY_ID, [id])
      .then((resultado) => {
        if (resultado) {
          res.status(200).json(resultado);
        } else {
          res.status(404).json({ respuesta: "Usuario no encontrado" });
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error en la consulta SQL" });
      });
  }

  public static async obtenerPorRol(
    res: Response,
    idRol: number
  ): Promise<any> {
    await pool
      .result(SQL_USUARIO.FIND_BY_ROL, [idRol])
      .then((misDatos) => {
        res.status(200).json(misDatos.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error en la consulta SQL" });
      });
  }
}
export default ServicioUsuarioConsulta;
