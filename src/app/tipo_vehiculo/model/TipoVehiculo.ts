class TipoVehiculo {
  private _codTipoVehiculo: number;
  private _claseTipoVehiculo: string; // Cambié "descTipoVehiculo" por "claseTipoVehiculo"

  constructor(cod: number, clase: string) {
    this._codTipoVehiculo = cod;
    this._claseTipoVehiculo = clase; // Cambié "desc" por "clase"
  }

  public get codTipoVehiculo(): number {
    return this._codTipoVehiculo;
  }

  public get claseTipoVehiculo(): string {
    // Cambié "descTipoVehiculo" por "claseTipoVehiculo"
    return this._claseTipoVehiculo;
  }

  public set codTipoVehiculo(value: number) {
    this._codTipoVehiculo = value;
  }

  public set claseTipoVehiculo(value: string) {
    // Cambié "descTipoVehiculo" por "claseTipoVehiculo"
    this._claseTipoVehiculo = value;
  }
}

export default TipoVehiculo;
