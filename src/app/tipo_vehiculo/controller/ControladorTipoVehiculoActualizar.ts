import { Request, Response } from "express";
import TipoVehiculo from "../model/TipoVehiculo";
import ServicioTipoVehiculoActualizar from "../service/ServicioTipoVehiculoActualizar";

class ControladorTipoVehiculoActualizar {
  public llamarActualizar(req: Request, res: Response): void {
    const objetito = new TipoVehiculo(
      req.body.codTipoVehiculo,
      req.body.claseTipoVehiculo
    );
    ServicioTipoVehiculoActualizar.actualizarTipoVehiculo(objetito, res);
  }
}
const controladorTipoVehiculoActualizar =
  new ControladorTipoVehiculoActualizar();
export default controladorTipoVehiculoActualizar;
