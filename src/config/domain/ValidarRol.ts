import { body, param } from "express-validator";

export const datosRolCrear = [
  body("nombreRol", "Rol requerido").not().isEmpty(),
  body("nombreRol", "Minimo 5 caracteres").isLength({ min: 5 }),
];

export const datoRolBorrar = [
  param("codRol", "Debe ser un número").isInt(),
  param("codRol", "Maximo 6 caracteres").isLength({ max: 6 }),
];

export const datosRolActualizar = [
  body("codRol", "Rol requerido").not().isEmpty(),
  body("codRol", "Codigo Rol debe ser un número").isInt(),
  body("nombreRol", "Rol requerido").not().isEmpty(),
  body("nombreRol", "Minimo 5 caracteres").isLength({ min: 5 }),
];
