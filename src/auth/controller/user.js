export const userGet = (req, res) => {
  res.status(200).json({ name: "Alfredo Lillo", email: "example@example.com" });
  // send("TODO: todos los usuarios");
};
