import { Request, Response } from "express";
import Usuario from "../model/Usuario";
import ServicioUsuarioCrear from "../service/ServicioUsuarioCrear";

class ControladorUsuarioCrear {
  public llamarGrabarUsuario(req: Request, res: Response): void {
    const fechaNacimiento = new Date(req.body.fechaNacimientoUsuario);

    const objTemporal = new Usuario(
      0,
      req.body.codRol,
      req.body.documentoUsuario,
      req.body.nombresUsuario,
      req.body.apellidosUsuario,
      req.body.generoUsuario,
      fechaNacimiento,
      req.body.telefonoUsuario
    );
    ServicioUsuarioCrear.grabarUsuario(objTemporal, res);
  }
}

const controladorUsuarioCrear = new ControladorUsuarioCrear();
export default controladorUsuarioCrear;
