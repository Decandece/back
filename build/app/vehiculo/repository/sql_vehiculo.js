"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_VEHICULO = void 0;
exports.SQL_VEHICULO = {
    FIND_ALL: "SELECT v.cod_vehiculo, v.cod_tipo_vehiculo, v.cod_usuario, v.placa_vehiculo \
        FROM vehiculos v ORDER BY v.cod_vehiculo",
    FIND_BY_ID: "SELECT v.cod_vehiculo, v.cod_tipo_vehiculo, v.cod_usuario, v.placa_vehiculo \
        FROM vehiculos v WHERE v.cod_vehiculo = $1",
    FIND_BY_USUARIO: "SELECT v.cod_vehiculo, v.cod_tipo_vehiculo, v.cod_usuario, v.placa_vehiculo \
        FROM vehiculos v WHERE v.cod_usuario = $1",
    FIND_BY_TIPO: "SELECT v.cod_vehiculo, v.cod_tipo_vehiculo, v.cod_usuario, v.placa_vehiculo \
        FROM vehiculos v WHERE v.cod_tipo_vehiculo = $1",
    CHECK_PLACA: "SELECT COUNT(v.cod_vehiculo) as cantidad FROM vehiculos v \
        WHERE v.placa_vehiculo = $1",
    ADD: "INSERT INTO vehiculos(cod_tipo_vehiculo, cod_usuario, placa_vehiculo) \
        VALUES ($1, $2, $3) RETURNING cod_vehiculo",
    DELETE: "DELETE FROM vehiculos WHERE cod_vehiculo = $1",
    UPDATE: "UPDATE vehiculos SET cod_tipo_vehiculo = $1, cod_usuario = $2, \
        placa_vehiculo = $3 WHERE cod_vehiculo = $4",
    FIND_BY_PLACA: "SELECT * FROM vehiculos WHERE placa_vehiculo = $1"
};
