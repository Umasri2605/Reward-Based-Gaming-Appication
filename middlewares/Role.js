// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next) {
//   const authHeader = req.headers.authorization;

//   if (!authHeader)
//     return res.send({ msg: "No token provided" });

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, "mySecretKey");

//     if (decoded.role !== "user") {
//       return res.send({ msg: "Access Denied - User Only" });
//     }

//     req.user = decoded;
//     next();

//   } catch (err) {
//     return res.send({ msg: "Invalid token" });
//   }
// };

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ msg: "Admin only" });
  next();
};

export const isUser = (req, res, next) => {
  if (req.user.role !== "user")
    return res.status(403).json({ msg: "Users only" });
  next();
};
