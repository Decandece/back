import express from "express";
import cors from "cors";
import morgan from "morgan";
import rutaRolApi from "../../app/rol/route/RutaRol";
import rutasTipoVehiculoAPI from "../../app/tipo_vehiculo/route/RutasTipoVehiculo";
import rutasVehiculoAPI from "../../app/vehiculo/route/RutasVehiculo";
import rutasUsuarioAPI from "../../app/usuario/route/RutasUsuario";
import rutaLoginAPI from "../../app/login/routes/LoginRoutes";
class Servidor {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.app.set("PORT", 3123);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100Mb" }));
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use("/api/rol", rutaRolApi);
    this.app.use("/api/tipo_vehiculo", rutasTipoVehiculoAPI);
    this.app.use("/api/vehiculo", rutasVehiculoAPI);
    this.app.use("/api/usuario", rutasUsuarioAPI);
    this.app.use("/api/login", rutaLoginAPI);
  }

  public arranquelo(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("Listo el backed en el puerto ", this.app.get("PORT"));
    });
  }
}

export default Servidor;
