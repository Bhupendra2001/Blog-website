require("dotenv").config();
const { db } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = process.env.Secret;
const cookies = process.env.cookee;

const register = (req, res) => {
  //  check Existing user
  try {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let sample = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!username) return res.status(400).send("please give me username");
    if (!email) return res.status(400).send("please give me email");
    if (!sample.test(email))
      return res.status(400).send("please give me valid email id");
    if (!password) return res.status(400).send("please give password");

    const q = "SELECT * FROM user WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
      if (err) return res.send(err);
      if (data.length) return res.status(409).send("User already exits!");

      // Hash the password and create a user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      const q = "INSERT INTO user(`username`,`email`,`password`) VALUES (?)";
      const values = [req.body.username, req.body.email, hash];

      db.query(q, [values], (err, data) => {
        if (err) return res.status(400).send(err);
        return res.status(201).send("user has been created");
      });
    });
  } catch (err) {
    return res.status(500).send({ "Server Error": err.message });
  }
};

const login = (req, res) => {
  // check user
  try {
    const q = "SELECT * FROM user WHERE username = ?";

    let username = req.body.username;
    let password = req.body.password;

    if (!username) return res.status(400).send("please enter the username");
    if (!password) return res.status(400).send("please enter the password");

    db.query(q, [req.body.username], (err, data) => {
      if (err) return res.send(err);
      if (data.length == 0) return res.status(404).json("User not found!");

      // check password
      const CheckPassword = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
      if (!CheckPassword)
        return res.status(400).json("Wrong username or password");

      const token = jwt.sign({ id: data[0].id }, key);
      const { password, ...other } = data[0];
      res
        .cookie(cookies, token, {
          httpOnly: true,
        })
        .status(200)
        .send(other);
    });
  } catch (err) {
    return res.status(500).send({ status: false, "Server Error": err.message });
  }
};

const logout = (req, res) => {
  res
    .clearCookie(cookies, {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};

module.exports = { register, login, logout };
