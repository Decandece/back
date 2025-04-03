class Usuario {
  private _codUsuario: number;
  private _codRol: number;
  private _documentoUsuario: string;
  private _nombresUsuario: string;
  private _apellidosUsuario: string;
  private _generoUsuario: number;
  private _fechaNacimientoUsuario: Date;
  private _telefonoUsuario: string;

  constructor(
    codUsu: number,
    codRol: number,
    documento: string,
    nombres: string,
    apellidos: string,
    genero: number,
    fechaNacimiento: Date,
    telefono: string
  ) {
    this._codUsuario = codUsu;
    this._codRol = codRol;
    this._documentoUsuario = documento;
    this._nombresUsuario = nombres;
    this._apellidosUsuario = apellidos;
    this._generoUsuario = genero;
    this._fechaNacimientoUsuario = fechaNacimiento;
    this._telefonoUsuario = telefono;
  }

  public get codUsuario(): number {
    return this._codUsuario;
  }

  public get codRol(): number {
    return this._codRol;
  }

  public get documentoUsuario(): string {
    return this._documentoUsuario;
  }

  public get nombresUsuario(): string {
    return this._nombresUsuario;
  }

  public get apellidosUsuario(): string {
    return this._apellidosUsuario;
  }

  public get generoUsuario(): number {
    return this._generoUsuario;
  }

  public get fechaNacimientoUsuario(): Date {
    return this._fechaNacimientoUsuario;
  }

  public get telefonoUsuario(): string {
    return this._telefonoUsuario;
  }

  public set codUsuario(value: number) {
    this._codUsuario = value;
  }

  public set codRol(value: number) {
    this._codRol = value;
  }

  public set documentoUsuario(value: string) {
    this._documentoUsuario = value;
  }

  public set nombresUsuario(value: string) {
    this._nombresUsuario = value;
  }

  public set apellidosUsuario(value: string) {
    this._apellidosUsuario = value;
  }

  public set generoUsuario(value: number) {
    this._generoUsuario = value;
  }

  public set fechaNacimientoUsuario(value: Date) {
    this._fechaNacimientoUsuario = value;
  }

  public set telefonoUsuario(value: string) {
    this._telefonoUsuario = value;
  }
}

export default Usuario;
