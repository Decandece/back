import { Response } from "express";

import Rol from "../model/Rol";
import { SQL_ROL } from "../repository/sql_rol";
import pool from "../../../config/connection/dbConnection";

class ServicioRolCrear {
  protected static async grabarRol(obj: Rol, res: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objGrabado: any;
        const roles = await consulta.one(SQL_ROL.HOW_MANY, [obj.nombreRol]);
        if (roles.cantidad == 0) {
          //Meter el codigo de grabar
          caso = 2;
          objGrabado = await consulta.one(SQL_ROL.ADD, [obj.nombreRol]);
        }
        return { caso, objGrabado };
      })
      .then(({ caso, objGrabado }) => {
        switch (caso) {
          case 1:
            res.status(400).json({ respuesta: "El rol ya existe" });
            break;
          default:
            res.status(200).json({ objGrabado });
            break;
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Se jodio el SQL" });
      });
  }
}
export default ServicioRolCrear;
