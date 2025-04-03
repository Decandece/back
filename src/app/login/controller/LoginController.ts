import { Request, Response } from "express";
import { validationResult } from "express-validator";
import ServicioLogin from "../service/ServicioLogin";
import Acceso from "../model/Acceso";

class LoginController {
  public iniciarSesion(req: Request, res: Response): void {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      res.status(400).json({ errores: errores.array() });
    } else {
      const { correo, clave } = req.body;
      // Creamos un objeto Acceso con valores temporales para codUsuario y uuidAcceso
      // que serán actualizados en el servicio si la autenticación es exitosa
      const acceso = new Acceso(0, correo, clave, "");
      ServicioLogin.validarUsuario(acceso, res);
    }
  }
}

const loginController = new LoginController();
export default loginController;
