import { Request, Response } from "express";
import ServicioTipoVehiculoConsulta from "../service/ServicioTipoVehiculoConsulta";

class ControladorTipoVehiculoConsulta {
  public llamarObtenerTodos(req: Request, res: Response): void {
    ServicioTipoVehiculoConsulta.obtenerTodos(res);
  }

  public llamarObtenerPorId(req: Request, res: Response): void {
    const id = Number(req.params.codTipoVehiculo);
    ServicioTipoVehiculoConsulta.obtenerPorId(res, id);
  }
}
const controladorTipoVehiculoConsulta = new ControladorTipoVehiculoConsulta();
export default controladorTipoVehiculoConsulta;
