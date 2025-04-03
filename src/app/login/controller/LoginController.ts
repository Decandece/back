import { Request, Response } from "express";
import { validationResult } from "express-validator";
import ServicioLogin from "../service/ServicioLogin";
import { Login } from "../model/Login";

class LoginController {
  public iniciarSesion(req: Request, res: Response): void {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      res.status(400).json({ errores: errores.array() });
    } else {
      const { correo, clave } = req.body;
      const login = new Login(correo, clave);
      ServicioLogin.validarUsuario(login, res);
    }
  }
}

const loginController = new LoginController();
export default loginController;
