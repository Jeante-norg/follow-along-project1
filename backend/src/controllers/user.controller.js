const UserModel = require("../models/user.model");

export async function CreateUser(req, res) {
  const { Name, email, password } = req.body;
  const checkUserPresent = await UserModel.findOne({
    email: email,
  });

  if (checkUserPresent) {
    return res.send("User already exists");
  }

  const newUser = new UserModel({
    Name: Name,
    email: email,
    password: password,
  });

  await newUser.save();
  return res.send("User created succesfully");
}
