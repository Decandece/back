import Rol from "../model/Rol";
import ServicioRolAtualizar from "../service/ServicioRolActualizar";
import { Request, Response } from "express";

class ControladorRolActualizar extends ServicioRolAtualizar {
  public llamarActualizar(req: Request, res: Response): void {
    const objetito = new Rol(0, "");
    objetito.codRol = req.body.codRol;
    objetito.nombreRol = req.body.nombreRol;
    ServicioRolAtualizar.actualizarRol(objetito, res);
  }
}
const controladorRolActualizar = new ControladorRolActualizar();
export default controladorRolActualizar;
