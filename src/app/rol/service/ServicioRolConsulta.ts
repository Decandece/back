import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_ROL } from "../repository/sql_rol";

class ServicioRolConsulta {
  protected static async obtenerTodos(res: Response): Promise<any> {
    await pool
      .result(SQL_ROL.FIND_ALL)
      .then((misDatos) => {
        res.status(200).json(misDatos.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Se jodio el SQL" });
      });
  }

  // Método para crear un nuevo rol
  protected static async crearRol(res: Response, nombre: string): Promise<any> {
    await pool
      .result(SQL_ROL.ADD, [nombre])
      .then((misDatos) => {
        res
          .status(200)
          .json({
            mensaje: "Rol añadido correctamente",
            rol: misDatos.rows[0],
          });
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Se jodio el SQL" });
      });
  }

  // Método para eliminar un rol
  protected static async eliminarRol(res: Response, id: number): Promise<any> {
    await pool
      .result(SQL_ROL.DELETE, [id])
      .then((misDatos) => {
        res.status(200).json({ mensaje: "Rol eliminado correctamente" });
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Se jodio el SQL" });
      });
  }
}
export default ServicioRolConsulta;
