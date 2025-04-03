import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import Usuario from "../model/Usuario";
import { SQL_USUARIO } from "../repository/sql_usuario";

class ServicioUsuarioBorrar {
  public static async borrar(obj: Usuario, res: Response): Promise<any> {
    await pool
      .task((consulta) => {
        return consulta.result(SQL_USUARIO.DELETE, [obj.codUsuario]);
      })
      .then((respuesta) => {
        res.status(200).json({
          respuesta: "Usuario eliminado correctamente",
          "Filas borradas": respuesta.rowCount,
        });
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error eliminando el usuario" });
      });
  }
}
export default ServicioUsuarioBorrar;
