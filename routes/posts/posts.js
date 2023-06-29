const express = require('express')
const { createPostCtrl, fetchPostCtrl, fetchPostsCtrl, deletePostCtrl, updatePostCtrl }=require('../../controllers/posts/posts')

const postRoutes = express.Router();

postRoutes.post("posts",createPostCtrl)
postRoutes.get("posts",fetchPostCtrl)
postRoutes.get("posts/:id",fetchPostsCtrl)

postRoutes.delete("posts/:id",deletePostCtrl)
postRoutes.put("posts/:id",updatePostCtrl)


module.exports=postRoutes