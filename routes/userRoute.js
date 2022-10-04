const express = require("express");
const { appendFile } = require("fs");
const path = require("path");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"), (err) => {
    if (!err) {
      console.log(" response sent no error");
    }
  });
});
userRouter.get("/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../about.html"), (err) => {
    if (!err) {
      console.log(" response sent no error");
    }
  });
});

userRouter.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../contact.html"), (err) => {
    if (!err) {
      console.log(" response sent no error");
    }
  });
});

// public resources

// 404 page
userRouter.use((req, res) => {
  res.sendFile(path.join(__dirname, "../404.html"), (err) => {
    if (!err) {
      console.log(" response sent no error");
    }
  });
});

module.exports = userRouter;
