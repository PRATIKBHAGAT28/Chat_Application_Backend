import mongoose from "mongoose";
import { Jwt } from "jsonwebtoken";

const cookieOptions = {
  maxage: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  return res.status(code).cookie("helo-toekn", token, cookieOptions).json({
    sucess: true,
    toeken,
    message,
    user,
  });
};

export { sendToken, cookieOptions };
