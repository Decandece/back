import { Response } from "express";
import Usuario from "../model/Usuario";
import { SQL_USUARIO } from "../repository/sql_usuario";
import pool from "../../../config/connection/dbConnection";

class ServicioUsuarioCrear {
  public static async grabarUsuario(obj: Usuario, res: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objGrabado: any;
        const documentos = await consulta.one(SQL_USUARIO.CHECK_DOCUMENTO, [
          obj.documentoUsuario,
        ]);
        if (documentos.cantidad == 0) {
          caso = 2;
          objGrabado = await consulta.one(SQL_USUARIO.ADD, [
            obj.codRol,
            obj.documentoUsuario,
            obj.nombresUsuario,
            obj.apellidosUsuario,
            obj.generoUsuario,
            obj.fechaNacimientoUsuario,
            obj.telefonoUsuario,
          ]);
        }
        return { caso, objGrabado };
      })
      .then(({ caso, objGrabado }) => {
        switch (caso) {
          case 1:
            res
              .status(400)
              .json({ respuesta: "Ya existe un usuario con ese documento" });
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
export default ServicioUsuarioCrear;
