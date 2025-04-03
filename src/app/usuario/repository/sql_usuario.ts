export const SQL_USUARIO = {
  FIND_ALL:
    "SELECT u.cod_usuario, u.cod_rol, u.documento_usuario, u.nombres_usuario, \
      u.apellidos_usuario, u.genero_usuario, u.fecha_nacimiento_usuario, \
      u.telefono_usuario FROM usuarios u ORDER BY u.cod_usuario",

  FIND_BY_ID:
    "SELECT u.cod_usuario, u.cod_rol, u.documento_usuario, u.nombres_usuario, \
      u.apellidos_usuario, u.genero_usuario, u.fecha_nacimiento_usuario, \
      u.telefono_usuario FROM usuarios u WHERE u.cod_usuario = $1",

  FIND_BY_ROL:
    "SELECT u.cod_usuario, u.cod_rol, u.documento_usuario, u.nombres_usuario, \
      u.apellidos_usuario, u.genero_usuario, u.fecha_nacimiento_usuario, \
      u.telefono_usuario FROM usuarios u WHERE u.cod_rol = $1",

  CHECK_DOCUMENTO:
    "SELECT COUNT(u.cod_usuario) as cantidad FROM usuarios u \
      WHERE u.documento_usuario = $1",

  ADD: "INSERT INTO usuarios(cod_rol, documento_usuario, nombres_usuario, \
      apellidos_usuario, genero_usuario, fecha_nacimiento_usuario, \
      telefono_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING cod_usuario",

  DELETE: "DELETE FROM usuarios WHERE cod_usuario = $1",

  UPDATE:
    "UPDATE usuarios SET cod_rol = $1, documento_usuario = $2, \
      nombres_usuario = $3, apellidos_usuario = $4, genero_usuario = $5, \
      fecha_nacimiento_usuario = $6, telefono_usuario = $7 \
      WHERE cod_usuario = $8",

  //verificar si existe otro usuario con el mismo documento
  CHECK_DOCUMENTO_UPDATE: `
    SELECT COUNT(u.cod_usuario) as cantidad 
    FROM usuarios u 
    WHERE u.documento_usuario = $1 AND u.cod_usuario != $2
  `

};
