export const SQL_LOGIN = {
  VALIDATE: `
    SELECT 
      a.cod_usuario AS "codUsuario", 
      u.nombres_usuario AS "nombresUsuario", 
      u.apellidos_usuario AS "apellidosUsuario", 
      r.nombre_rol AS "nombreRol"
    FROM accesos a
    INNER JOIN usuarios u ON a.cod_usuario = u.cod_usuario
    INNER JOIN roles r ON u.cod_rol = r.cod_rol
    WHERE a.correo_acceso = $1 AND a.clave_acceso = $2
  `,
  REGISTER_LOGIN: `
    INSERT INTO ingresos (cod_usuario, fecha_ingreso, hora_ingreso)
    VALUES ($1, CURRENT_DATE, CURRENT_TIME)
    RETURNING cod_ingreso
  `
};