import { Router } from "express";
import loginController from "../controller/LoginController";
import loginValidador from "../../../config/domain/LoginValidador";

class LoginRoutes {
  public rutaLoginAPI: Router;

  constructor() {
    this.rutaLoginAPI = Router();
    this.configurarRutas();
  }

  public configurarRutas(): void {
    this.rutaLoginAPI.post(
      "/iniciar",
      loginValidador.validarLogin,
      loginController.iniciarSesion
    );
  }
}

const loginRoutes = new LoginRoutes();
export default loginRoutes.rutaLoginAPI;
