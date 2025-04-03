import { Request, Response } from "express";
import ServicioVehiculoConsulta from "../service/ServicioVehiculoConsulta";

class ControladorVehiculoConsulta {
  public llamarObtenerTodos(req: Request, res: Response): void {
    ServicioVehiculoConsulta.obtenerTodos(res);
  }

  public llamarObtenerPorId(req: Request, res: Response): void {
    const id = Number(req.params.codVehiculo);
    ServicioVehiculoConsulta.obtenerPorId(res, id);
  }

  public llamarObtenerPorUsuario(req: Request, res: Response): void {
    const idUsuario = Number(req.params.codUsuario);
    ServicioVehiculoConsulta.obtenerPorUsuario(res, idUsuario);
  }

  public llamarObtenerPorTipo(req: Request, res: Response): void {
    const idTipo = Number(req.params.codTipoVehiculo);
    ServicioVehiculoConsulta.obtenerPorTipo(res, idTipo);
  }


public llamarObtenerPorPlaca(req: Request, res: Response): void {
  const placa = req.params.placa;
  ServicioVehiculoConsulta.obtenerPorPlaca(res, placa);
}
}
const controladorVehiculoConsulta = new ControladorVehiculoConsulta();
export default controladorVehiculoConsulta;
