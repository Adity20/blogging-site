const express = require('express')
const { registerCtrl, loginCtrl, userDetailsCtrl, profileCtrl, profilePhotoCtrl, uploadPhotoCtrl, passwordUpdateCtrl, userUpdateCtrl, logoutCtrl } = require("../../controllers/user/users")

const userRoutes = express.Router();

userRoutes.post('/register',registerCtrl) 


userRoutes.post("/login",loginCtrl)


userRoutes.get("/:id",userDetailsCtrl)
userRoutes.get("/proile/:id",profileCtrl)
userRoutes.put("/profile-photo-upload/:id",profilePhotoCtrl)
userRoutes.put("/cover-photo-upload/:id",uploadPhotoCtrl)
userRoutes.put("/password-update/:id",passwordUpdateCtrl)

userRoutes.put("/update/:id",userUpdateCtrl)

userRoutes.get("/logout/:id",logoutCtrl)



module.exports = userRoutes