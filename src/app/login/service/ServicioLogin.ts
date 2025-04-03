import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_LOGIN } from "../repository/sql_login";
import { Login, LoginResponse } from "../model/Login";

class ServicioLogin {
  public static async validarUsuario(
    login: Login,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let usuario: any;
        let codIngreso: any;

        // Verificamos si existe el usuario con las credenciales proporcionadas
        usuario = await consulta.oneOrNone(SQL_LOGIN.VALIDATE, [
          login.correo,
          login.clave,
        ]);

        if (usuario) {
          caso = 2;
          // Registrar ingreso con el código de usuario
          const ingreso = await consulta.one(SQL_LOGIN.REGISTER_LOGIN, [
            usuario.codUsuario,
          ]);
          codIngreso = ingreso.cod_ingreso;
        }

        return { caso, usuario, codIngreso };
      })
      .then(({ caso, usuario, codIngreso }) => {
        switch (caso) {
          case 1:
            res.status(401).json({
              respuesta: "Credenciales incorrectas",
            });
            break;

          default:
            const respuesta = new LoginResponse(
              usuario.codUsuario,
              usuario.nombresUsuario,
              usuario.apellidosUsuario,
              usuario.nombreRol
            );

            res.status(200).json({
              mensaje: "Inicio de sesión exitoso",
              usuario: respuesta,
              codIngreso: codIngreso,
            });
            break;
        }
      })
      .catch((miError) => {
        // Manejo de errores más específico
        let mensajeError = "Error en el servidor";

        if (miError.code === "23502") {
          mensajeError = "Error de validación: Datos incompletos";
        } else if (miError.code === "23503") {
          mensajeError = "Error de referencia: El usuario no existe";
        }

        res.status(500).json({
          respuesta: mensajeError,
        });
      });
  }
}

export default ServicioLogin;
