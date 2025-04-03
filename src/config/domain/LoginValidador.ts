import { check } from "express-validator";

class LoginValidador {
  public validarLogin = [
    check("correo")
      .notEmpty()
      .withMessage("El correo es requerido")
      .isEmail()
      .withMessage("Debe ser un correo electrónico válido"),

    check("clave")
      .notEmpty()
      .withMessage("La clave es requerida")
      .isLength({ min: 6 })
      .withMessage("La clave debe tener al menos 6 caracteres"),
  ];
}

const loginValidador = new LoginValidador();
export default loginValidador;
