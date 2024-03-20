import { comparePassword, hashPassword } from "../utils/passwordEncrypter";

const pass = "12345";

export const testPassword = (req, res) => {
  res.json({
    passwordHashed: hashPassword(pass),
  });
};

export const testCompare = (req, res) => {
  res.json({
    compare: comparePassword("12345", hashPassword(pass)),
  });
};

export const userGet = (req, res) => {
  res.status(200).json({ name: "Alfredo Lillo", email: "example@example.com" });
  // send("TODO: todos los usuarios");
};
