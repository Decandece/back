import { Request, Response } from "express";
import Usuario from "../model/Usuario";
import ServicioUsuarioActualizar from "../service/ServicioUsuarioActualizar";

class ControladorUsuarioActualizar {
  public llamarActualizar(req: Request, res: Response): void {
    const fechaNacimiento = new Date(req.body.fechaNacimientoUsuario);

    const objetito = new Usuario(
      req.body.codUsuario,
      req.body.codRol,
      req.body.documentoUsuario,
      req.body.nombresUsuario,
      req.body.apellidosUsuario,
      req.body.generoUsuario,
      fechaNacimiento,
      req.body.telefonoUsuario
    );
    ServicioUsuarioActualizar.actualizarUsuario(objetito, res);
  }
}
const controladorUsuarioActualizar = new ControladorUsuarioActualizar();
export default controladorUsuarioActualizar;
