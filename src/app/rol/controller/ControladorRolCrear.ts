import { Request, Response } from "express";

import Rol from "../model/Rol";
import ServicioCrear from "../service/ServicioRolCrear";

class ControladorRolCrear extends ServicioCrear {
  public llamarGrabarRol(req: Request, res: Response): void {
    const objTemporal = new Rol(0, "");
    objTemporal.nombreRol = req.body.nombreRol;
    ServicioCrear.grabarRol(objTemporal, res);
  }
}

const controladorRolCrear = new ControladorRolCrear();
export default controladorRolCrear;
