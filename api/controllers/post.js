require("dotenv").config();
const key = process.env.Secret;

const { db } = require("../db");
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../aws");

const addPost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).send("Not authenticated !");

  let { title, descp, cat, date } = req.body;
  if (!title) return res.status(400).send("please enter the Title");
  if (!descp) return res.status(400).send("please enter the Description");

  if (!cat) return res.status(400).send("please enter the Category");
  if (!date) return res.status(400).send("please enter the Date");

  let image = req.files;
  if (!image[0]) {
    return res
      .status(400)
      .send({ status: false, message: "please provide image" });
  }

  let url = await uploadFile(image[0]);
  req.body.img = url;

  jwt.verify(token, key, (err, userinfo) => {
    if (err) return res.status(403).send("Token is not valid!");

    const q =
      "INSERT INTO posts(`title`, `descp`, `img` , `cat`, `date` ,`uid` ) VALUES (?)";

    const values = [
      req.body.title,
      req.body.descp,
      req.body.img,
      req.body.cat,
      req.body.date,
      userinfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).send(err);
      return res.send({ data: data });
    });
  });
};

const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM  posts WHERE cat= ?"
    : "SELECT * FROM  posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).send(data);
  });
};

const getPost = (req, res) => {
  const q =
    " select  title , descp, cat , posts.img  , user.username, posts.id from blog.posts INNER JOIN blog.user ON posts.uid = user.id where posts.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).send(data[0]);
  });
};

const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).send("Not authenticated !");

  jwt.verify(token, key, (err, userinfo) => {
    if (err) return res.status(403).send("Token is not valid!");

    const postId = req.params.id;
    console.log(postId);
    const q =
      "UPDATE posts  SET `title`=?, `descp`=?, `img`=? , `cat`=?, WHERE `id` = ? AND `uid` = ? ";

    const values = [req.body.title, req.body.descp, req.body.img, req.body.cat];

    db.query(q, [...values, postId, userinfo.id], (err, data) => {
      if (err) return res.status(500).send(err);
      return res.send("post has been updated");
    });
  });
};

const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).send("Not authenticated !");

  jwt.verify(token, key, (err, userinfo) => {
    if (err) return res.status(403).send("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userinfo.id], (err, data) => {
      if (err) return res.status(403).send("you can delete only your post!");

      return res.send("post has been deleted!");
    });
  });
};

module.exports = { addPost, getPost, getPosts, updatePost, deletePost };
