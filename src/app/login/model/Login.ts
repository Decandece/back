export class Login {
  public correo: string;
  public clave: string;

  constructor(correo: string, clave: string) {
    this.correo = correo;
    this.clave = clave;
  }
}

export class LoginResponse {
  public codUsuario: number;
  public nombresUsuario: string;
  public apellidosUsuario: string;
  public nombreRol: string;

  constructor(
    codUsuario: number,
    nombresUsuario: string,
    apellidosUsuario: string,
    nombreRol: string
  ) {
    this.codUsuario = codUsuario;
    this.nombresUsuario = nombresUsuario;
    this.apellidosUsuario = apellidosUsuario;
    this.nombreRol = nombreRol;
  }
}
