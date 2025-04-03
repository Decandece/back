// RutasUsuario.ts
import { Router } from "express";
import controladorUsuarioCrear from "../controller/ControladorUsuarioCrear";
import controladorUsuarioActualizar from "../controller/ControladorUsuarioActualizar";
import controladorUsuarioBorrar from "../controller/ControladorUsuarioBorrar";
import controladorUsuarioConsulta from "../controller/ControladorUsuarioConsulta";
import usuarioValidador from "../../../config/domain/UsuarioValidador";
import validarDatos from "../../../middleware/ValidarDatos";

class RutasUsuario {
  public rutasUsuarioAPI: Router;

  constructor() {
    this.rutasUsuarioAPI = Router();
    this.configurarRutas();
  }

  public configurarRutas(): void {
    // Ruta para obtener todos los usuarios
    this.rutasUsuarioAPI.get("/getall",
      controladorUsuarioConsulta.llamarObtenerTodos
    );

    // Ruta para obtener usuario por ID
    this.rutasUsuarioAPI.get("/get/:codUsuario",
      controladorUsuarioConsulta.llamarObtenerPorId
    );

    // Ruta para obtener usuarios por rol
    this.rutasUsuarioAPI.get("/rol/:codRol",
      controladorUsuarioConsulta.llamarObtenerPorRol
    );

    // Ruta para crear un usuario - CON VALIDACIÓN
    this.rutasUsuarioAPI.post("/add",
      usuarioValidador.validarCrearUsuario,
      validarDatos.ahora,
      controladorUsuarioCrear.llamarGrabarUsuario
    );

    // Ruta para actualizar un usuario - CON VALIDACIÓN
    this.rutasUsuarioAPI.put("/update",
      usuarioValidador.validarActualizarUsuario,
      validarDatos.ahora,
      controladorUsuarioActualizar.llamarActualizar
    );

    // Ruta para eliminar un usuario - CON VALIDACIÓN
    this.rutasUsuarioAPI.delete("/delete/:codUsuario",
      usuarioValidador.validarBorrarUsuario,
      validarDatos.ahora,
      controladorUsuarioBorrar.llamarBorrar
    );
  }
}

const rutasUsuario = new RutasUsuario();
export default rutasUsuario.rutasUsuarioAPI;
