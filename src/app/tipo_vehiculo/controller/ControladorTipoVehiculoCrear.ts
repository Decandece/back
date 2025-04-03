// ControladorTipoVehiculoCrear.ts
import { Request, Response } from "express";
import TipoVehiculo from "../model/TipoVehiculo";
import ServicioTipoVehiculoCrear from "../service/ServicioTipoVehiculoCrear";

class ControladorTipoVehiculoCrear {
  public llamarGrabarTipoVehiculo(req: Request, res: Response): void {
    const objTemporal = new TipoVehiculo(0, req.body.claseTipoVehiculo);
    ServicioTipoVehiculoCrear.grabarTipoVehiculo(objTemporal, res);
  }
}

const controladorTipoVehiculoCrear = new ControladorTipoVehiculoCrear();
export default controladorTipoVehiculoCrear;
