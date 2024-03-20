import bc from "bcrypt";

// este metodo hashea la contraseña recibida por parametros
export const hashPassword = (password) => bc.hashSync(password, 10);
// y esta comprara el hash recibido por paramaetro con la que esta guardada en la base de datos
export const comparePassword = (password, hashBDPassword) =>
  bc.compareSync(password, hashBDPassword);
