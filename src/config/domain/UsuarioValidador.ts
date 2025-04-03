import { check } from "express-validator";

class UsuarioValidador {
  public validarCrearUsuario = [
    check("codRol")
      .isNumeric()
      .withMessage("El código de rol debe ser numérico"),
    check("documentoUsuario")
      .notEmpty()
      .withMessage("Se requiere el documento del usuario")
      .isString()
      .withMessage("El documento debe ser una cadena de texto"),
    check("nombresUsuario")
      .notEmpty()
      .withMessage("Se requieren los nombres del usuario")
      .isString()
      .withMessage("Los nombres deben ser una cadena de texto"),
    check("apellidosUsuario")
      .notEmpty()
      .withMessage("Se requieren los apellidos del usuario")
      .isString()
      .withMessage("Los apellidos deben ser una cadena de texto"),
    check("generoUsuario")
      .notEmpty()
      .withMessage("Se requiere el género del usuario")
      .isString()
      .withMessage("El género debe ser una cadena de texto"),
    check("fechaNacimientoUsuario")
      .notEmpty()
      .withMessage("Se requiere la fecha de nacimiento")
      .isDate()
      .withMessage("Debe ser una fecha válida"),
    check("telefonoUsuario")
      .notEmpty()
      .withMessage("Se requiere el teléfono del usuario")
      .isString()
      .withMessage("El teléfono debe ser una cadena de texto"),
  ];

  public validarActualizarUsuario = [
    check("codUsuario")
      .isNumeric()
      .withMessage("El código de usuario debe ser numérico"),
    check("codRol")
      .isNumeric()
      .withMessage("El código de rol debe ser numérico"),
    check("documentoUsuario")
      .notEmpty()
      .withMessage("Se requiere el documento del usuario")
      .isString()
      .withMessage("El documento debe ser una cadena de texto"),
    check("nombresUsuario")
      .notEmpty()
      .withMessage("Se requieren los nombres del usuario")
      .isString()
      .withMessage("Los nombres deben ser una cadena de texto"),
    check("apellidosUsuario")
      .notEmpty()
      .withMessage("Se requieren los apellidos del usuario")
      .isString()
      .withMessage("Los apellidos deben ser una cadena de texto"),
    check("generoUsuario")
      .notEmpty()
      .withMessage("Se requiere el género del usuario")
      .isString()
      .withMessage("El género debe ser una cadena de texto"),
    check("fechaNacimientoUsuario")
      .notEmpty()
      .withMessage("Se requiere la fecha de nacimiento")
      .isDate()
      .withMessage("Debe ser una fecha válida"),
    check("telefonoUsuario")
      .notEmpty()
      .withMessage("Se requiere el teléfono del usuario")
      .isString()
      .withMessage("El teléfono debe ser una cadena de texto"),
  ];

  public validarBorrarUsuario = [
    check("codUsuario")
      .isNumeric()
      .withMessage("El código de usuario debe ser numérico"),
  ];
}

const usuarioValidador = new UsuarioValidador();
export default usuarioValidador;
