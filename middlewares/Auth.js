// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next) {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.json({
//       success: false,
//       message: "No token provided",
//     });
//   }

//   const token = authHeader.split(" ")[1];

//   if (!token) {
//     return res.json({
//       success: false,
//       message: "Invalid token format",
//     });
//   }

//   try {
//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET || "mySecretKey"
//     );

//     if (decoded.role !== "admin") {
//       return res.json({
//         success: false,
//         message: "Access Denied - Admins only",
//       });
//     }

//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.json({
//       success: false,
//       message: "Invalid or expired token",
//     });
//   }
// };

const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.json({
      success: false,
      message: "No token provided",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.json({
      success: false,
      message: "Invalid token format",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "mySecretKey"
    );

    if (decoded.role !== "admin") {
      return res.json({
        success: false,
        message: "Access Denied - Admins only",
      });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
