const express = require("express");
const { body } = require("express-validator");

const feedController = require("../controller/feed");

const router = express.Router();

// GET /feed/GetPosts
router.get("/GetPosts", feedController.getPosts);

// POST /feed/CreatePost
router.post(
  "/CreatePost",
  [
    body("title").trim().isLength({ min: 8 }),
    body("content").trim().isLength({ min: 10 }),
  ],
  feedController.createPosts
);

// GET /feed/GetPost
router.get("/GetPost/:postId" , feedController.getPost);

module.exports = router;
