import { Request, Response } from "express";
import ServicioUsuarioBorrar from "../service/ServicioUsuarioBorrar";
import Usuario from "../model/Usuario";

class ControladorUsuarioBorrar {
  public llamarBorrar(req: Request, res: Response): void {
    const codigo = Number(req.params.codUsuario);
    const fechaVacia = new Date();
    const objUsuario = new Usuario(codigo, 0, "", "", "", 0, fechaVacia, "");
    ServicioUsuarioBorrar.borrar(objUsuario, res);
  }
}

const controladorUsuarioBorrar = new ControladorUsuarioBorrar();
export default controladorUsuarioBorrar;
