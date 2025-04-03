import { Request, Response } from "express";
import ServicioUsuarioConsulta from "../service/ServicioUsuarioConsulta";

class ControladorUsuarioConsulta {
  public llamarObtenerTodos(req: Request, res: Response): void {
    ServicioUsuarioConsulta.obtenerTodos(res);
  }

  public llamarObtenerPorId(req: Request, res: Response): void {
    const id = Number(req.params.codUsuario);
    ServicioUsuarioConsulta.obtenerPorId(res, id);
  }

  public llamarObtenerPorRol(req: Request, res: Response): void {
    const idRol = Number(req.params.codRol);
    ServicioUsuarioConsulta.obtenerPorRol(res, idRol);
  }
}
const controladorUsuarioConsulta = new ControladorUsuarioConsulta();
export default controladorUsuarioConsulta;
