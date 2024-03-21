// generando el token
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const secretJwt = process.env.JWT_SECRET;

//jwt.sign() ---> recibe 3 parametros: objeto: un usuario, secreto: palabra secreta, objeto: configuracion

export function singToken(user) {
  return jwt.sign({ user }, secretJwt, { expiresIn: "1d" });
}
