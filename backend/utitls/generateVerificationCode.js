import jwt from "jsonwebtoken";
export const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const generateTokenAndSetcookies = (res, userId) => {
  const secret = process.env.JWT_SECRET || "yourFallbackSecret";
  const token = jwt.sign({ userId }, secret, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxage: 7 * 60 * 60 * 24 * 1000,
  });
  return token;
};
