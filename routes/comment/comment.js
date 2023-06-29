const express = require('express')

const { createcommentCtrl, commentDetailsCtrl, deleteCommentCtrl, updateCommentCtrl }=require('../../controllers/comments/comments')

const commentRoutes = express.Router();

commentRoutes.post("comments",createcommentCtrl)

commentRoutes.get("comments/:id",commentDetailsCtrl)

commentRoutes.delete("comments/:id",deleteCommentCtrl)
commentRoutes.put("comments/:id",updateCommentCtrl)


module.exports=commentRoutes