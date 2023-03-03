const express = require('express')
const {register,login, logout} = require('../controllers/auth')
const { addPost,getPost, getPosts, updatePost,deletePost} = require('../controllers/post')
const router = express.Router()

router.get('/', (req, res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("Apis is running.. ");
})

//-----------auth-----------------//
router.post('/api/auth/register' , register)
router.post('/api/auth/login',  login)
router.post('/api/auth/logout', logout)
//-------------post--------------//
router.post('/api/posts/test',addPost );
router.get('/api/posts', getPosts);
router.get('/api/posts/:id', getPost);
router.delete('/api/posts/:id', deletePost);
router.put("/api/posts/:id", updatePost)


module.exports = router