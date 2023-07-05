const express = require("express");
const multer = require("multer");
const storage = require("../../config/cloudinary");
const {
  registerCtrl,
  loginCtrl,
  userDetailsCtrl,
  profileCtrl,
  uploadProfilePhotoCtrl,
  uploadCoverImgCtrl,
  updatePasswordCtrl,
  updateUserCtrl,
  logoutCtrl,
} = require("../../controllers/user/users");
const protected = require("../../middlewares/protected");
const userRoutes = express.Router();

//instance of multer
const upload = multer({ storage });

//rendering the login page
userRoutes.get('/login',(req,res)=>{
  res.render('users/login.ejs')
})

userRoutes.get('/register',(req,res)=>{
  res.render('users/register.ejs')
})

userRoutes.get('/profile-page',(req,res)=>{
  res.render('users/profile.ejs')
})

userRoutes.get('/profile-photo-upload',(req,res)=>{
  res.render('users/uploadProfilePhoto.ejs')
})
userRoutes.get('/cover-photo-upload',(req,res)=>{
  res.render('users/uploadCoverPhoto.ejs')
})

userRoutes.get('/update-user',(req,res)=>{
  res.render('users/updateUser.ejs')
})



//POST/api/v1/users/register

userRoutes.post("/register", upload.single("profile"), registerCtrl);

//POST/api/v1/users/login
userRoutes.post("/login", loginCtrl);

//GET/api/v1/users/profile
userRoutes.get("/profile", protected, profileCtrl);

//PUT/api/v1/users/profile-photo-upload/:id
userRoutes.put(
  "/profile-photo-upload/",
  protected,
  upload.single("profile"),
  uploadProfilePhotoCtrl
);

//PUT/api/v1/users/cover-photo-upload/:id
userRoutes.put(
  "/cover-photo-upload/",
  protected,
  upload.single("profile"),
  uploadCoverImgCtrl
);

//PUT/api/v1/users/update-password/:id
userRoutes.put("/update-password/:id", updatePasswordCtrl);

//PUT/api/v1/users/update/:id
userRoutes.put("/update/:id", updateUserCtrl);

//GET/api/v1/users/:id
userRoutes.get("/:id", userDetailsCtrl);

//GET/api/v1/users/logout
userRoutes.get("/logout", logoutCtrl);

module.exports = userRoutes;
