const express=require("express");
const dotenv=require("dotenv")
const connectDB=require("./config/db")
const cors=require("cors");
const userRoutes=require("./user/userRoutes");
const quizRoutes=require("./quiz/quizRoutes");
const resultRoutes=require("./result/resultRoutes");


dotenv.config();
connectDB();
const app=express();
app.use(express.json());
app.use(cors());

app.get("/",function(req,res){
    res.send("Hello All Welcome To Our Website")
})

app.use("/user",userRoutes);
app.use("/quiz",quizRoutes);
app.use("/result",resultRoutes);

const PORT=process.env.PORT || 3500;
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})

