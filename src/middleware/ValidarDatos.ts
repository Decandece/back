import { validationResult } from "express-validator";
import { Request, Response } from "express";
import { NextFunction } from "express";

class ValidarDatos {
  public ahora(req: Request, res: Response, next: NextFunction): void {
    const arregloErrores = validationResult(req);
    if (arregloErrores.isEmpty()) {
      next();
    } else {
      res.status(400).json({ respuesta: arregloErrores.array() });
    }
  }
}

const validarDatos = new ValidarDatos();
export default validarDatos;
