import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

//create new user
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  const avatar = {
    Public_id: "ffhfjj",
    url: "fffjkdj",
  };
  const user = await User.create({
    name,
    username,
    password,
    avatar,
    bio,
  });

  sendToken(res, user, 201, "User Created");
};

//log in user and save toekn in cookie
const login = TryCatch(async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).select("+password");

    if (!user) return next(new ErrorHandler("invalid username or password"));

    const isMatch = await compare(password, user.password);

    if (!isMatch) return next(new ErrorHandler("invalid password"));
    sendToken(
      res,
      user,
      201,
      "loggged in successfully,",
      `welcome back, ${user.name}`,
    );
  } catch (error) {
    next(error);
  }
});

// get my profile by ID
const getMyProfile = async (Req, res) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
};

//export
export { login, newUser, getMyProfile };
