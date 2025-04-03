import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_LOGIN } from "../repository/sql_login";
import Acceso from "../model/Acceso";
import Ingreso from "../model/Ingreso";

// Interfaz para la respuesta del login
interface LoginResponse {
  codUsuario: number;
  nombresUsuario: string;
  apellidosUsuario: string;
  nombreRol: string;
}

class ServicioLogin {
  public static async validarUsuario(
    acceso: Acceso,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let usuario: any;
        let codIngreso: any;

        // Verificamos si existe el usuario con las credenciales proporcionadas
        usuario = await consulta.oneOrNone(SQL_LOGIN.VALIDATE, [
          acceso.correoAcceso,
          acceso.claveAcceso,
        ]);

        if (usuario) {
          caso = 2;
          // Actualizamos el codUsuario en el objeto acceso
          acceso.codUsuario = usuario.codUsuario;
          
          // Creamos un objeto Ingreso para registrar el ingreso
          const fechaActual = new Date();
          const ingresoTemp = new Ingreso(0, usuario.codUsuario, fechaActual, fechaActual);
          
          // Registrar ingreso con el código de usuario
          const ingresoResult = await consulta.one(SQL_LOGIN.REGISTER_LOGIN, [
            ingresoTemp.codUsuario,
          ]);
          
          codIngreso = ingresoResult.cod_ingreso;
          // Actualizamos el codIngreso en el objeto ingreso
          ingresoTemp.codIngreso = codIngreso;
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
            const respuesta: LoginResponse = {
              codUsuario: usuario.codUsuario,
              nombresUsuario: usuario.nombresUsuario,
              apellidosUsuario: usuario.apellidosUsuario,
              nombreRol: usuario.nombreRol
            };

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

        console.error("Error en el servicio de login:", miError);
        
        res.status(500).json({
          respuesta: mensajeError,
        });
      });
  }
}

export default ServicioLogin;
