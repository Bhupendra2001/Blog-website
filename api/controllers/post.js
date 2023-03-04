require('dotenv').config()
const key = process.env.Secret

const {db} = require('../db')
const jwt = require('jsonwebtoken')

 const addPost =  (req,res)=>{
   const token = req.cookies.access_token
   if(!token) return res.status(401).send("Not authenticated !")

   jwt.verify(token ,key , (err, userinfo)=>{
      if(err) return res.status(403).send("Token is not valid!")
   
   const q = "INSERT INTO posts(`title`, `desc`, `img` , `cat`, `date` ,`uid` ) VALUES (?)"
    
   const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userinfo.id
   ]
   
   db.query(q,[values],(err,data)=>{
      if(err) return res.status(500).send(err);
      return res.send("post has been created");

   })

   })
     
}


const getPosts =  (req,res)=>{
   res.setHeader("Access-Control-Allow-Credentials","true");
   const q = req.query.cat ? "SELECT * FROM  posts WHERE cat= ?" 
   : "SELECT * FROM  posts";

   db.query(q,[req.query.cat], (err, data)=>{
    if(err) return res.send(err);

    return res.status(200).send(data);
   })
}


const getPost =  (req,res)=>{
   res.setHeader("Access-Control-Allow-Credentials","true");
   const q = " select title , descp, cat , img  , user.username from blog.posts INNER JOIN blog.user ON posts.uid = user.id where posts.id = ? ";

   db.query(q,[req.params.id], (err, data)=>{
    if(err) return res.send(err);

      return res.status(200).send(data[0]);
   })
}


const updatePost =  (req,res)=>{

   res.setHeader("Access-Control-Allow-Credentials","true");
   const token = req.cookies.access_token
   if(!token) return res.status(401).send("Not authenticated !")

   jwt.verify(token ,key , (err, userinfo)=>{
      if(err) return res.status(403).send("Token is not valid!")
   
      const postId = req.params.id
    const q = "UPDATE posts  SET `title`=?, `desc`=?, `img`=? , `cat`=?, WHERE `id` = ? AND `uid` = ? ";
    
   const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      
   ]
   
   db.query(q,[...values, postId, userinfo.id],(err,data)=>{
      if(err) return res.status(500).send(err);
      return res.send("post has been updated");
   })

   })
}


const deletePost =  (req,res)=>{
   res.setHeader("Access-Control-Allow-Credentials","true");

   const token = req.cookies.access_token
   if(!token) return res.status(401).send("Not authenticated !")

   jwt.verify(token ,key , (err, userinfo)=>{
      if(err) return res.status(403).send("Token is not valid!")
      
      const postId = req.params.id
      const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"
      
      db.query(q, [postId, userinfo.id], (err, data)=>{
         if(err) return res.status(403).send("you can delete only your post!")
         
         return res.json("post has been deleted!");
      })
   })
}

module.exports = { addPost, getPost, getPosts, updatePost, deletePost }