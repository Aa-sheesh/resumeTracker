import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.send('Hello from "api/v1"');
});

router.get("/login",(req,res)=>{
    res.send('Login route');
});

router.get("/logout",(req,res)=>{
    res.send('Logout route');
});

router.get("/signup",(req,res)=>{
    res.send('signup route');
});

export default router;