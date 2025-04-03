"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const RutaRol_1 = __importDefault(require("../../app/rol/route/RutaRol"));
const RutasTipoVehiculo_1 = __importDefault(require("../../app/tipo_vehiculo/route/RutasTipoVehiculo"));
const RutasVehiculo_1 = __importDefault(require("../../app/vehiculo/route/RutasVehiculo"));
const RutasUsuario_1 = __importDefault(require("../../app/usuario/route/RutasUsuario"));
const LoginRoutes_1 = __importDefault(require("../../app/login/routes/LoginRoutes"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.set("PORT", 3123);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100Mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use("/api/rol", RutaRol_1.default);
        this.app.use("/api/tipo_vehiculo", RutasTipoVehiculo_1.default);
        this.app.use("/api/vehiculo", RutasVehiculo_1.default);
        this.app.use("/api/usuario", RutasUsuario_1.default);
        this.app.use("/api/login", LoginRoutes_1.default);
    }
    arranquelo() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Listo el backed en el puerto ", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
