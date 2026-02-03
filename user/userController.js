const mongoose=require("mongoose");
const userModel=require("./userModel");
var jwt=require("jsonwebtoken");

exports.signupUser = async (req, res) => {
    console.log( req.body);
   try {
     const { username, password } = req.body;
   if (!username || !password) {
       return res.json({ message: "Missing fields" });
     }
     const existingUser = await userModel.findOne({ username });
     if (existingUser) {
       return res.json({ message: "Username exists" });
     }
     await new userModel({ username, password }).save();
     return res.json({ msg:"success"});
   } catch (err) {
     return res.json({ error: err.message });
   }
 };

exports.loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await userModel.findOne({
        $or: [
          { username },
          { password: username },
        ]
      });
  
      if (!user) return res.send({ msg: "Invalid Credentials" });
      if (user.password !== password)
        return res.send({ msg: "Invalid Password" });
  
      const token = jwt.sign(
        { id: user._id, role: user.role },
        "mySecretKey",
        { expiresIn: "1h" }
      );
  
      return res.send({
        msg: "success",
        token,
        user: {
          _id: user._id,                 
          username: user.username,
          password:user.password,
          role: user.role,
          score: user.score,

        }
      });
  
    } catch (err) {
      console.log(err);
      return res.send({ msg: "Server Error" });
    }
  };