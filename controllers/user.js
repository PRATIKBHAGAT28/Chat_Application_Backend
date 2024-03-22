import { User } from "../models/user.js";

//create new user
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  // const avatar = {
  //   Public_id: "ffhfjj",
  //   url: "fffjkdj",
  // };
  // await User.create({
  //   name: "heloo",
  //   username: "hello",
  //   password: "hello",
  // });

  res.status(201).json("user created succesfullly !! ");
};

const login = (req, res) => {
  res.send("Hello World!");
};

export { login, newUser };
