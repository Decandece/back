import { Request, Response } from "express";
import ServicioRolConsulta from "../service/ServicioRolConsulta";

class ControladorRolConsulta extends ServicioRolConsulta {
  public llamarObtenerTodos(req: Request, res: Response): void {
    ServicioRolConsulta.obtenerTodos(res);
  }

  public llamarCrearRol(req: Request, res: Response): void {
    const { nombre } = req.body;
    ServicioRolConsulta.crearRol(res, nombre);
  }

  public llamarEliminarRol(req: Request, res: Response): void {
    const { id } = req.params;
    ServicioRolConsulta.eliminarRol(res, Number(id));
  }
}

const controladorRolConsulta = new ControladorRolConsulta();
export default controladorRolConsulta;
