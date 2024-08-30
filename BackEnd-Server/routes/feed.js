const express = require('express');

const feedController = require('../controller/feed')

const router = express.Router();

// GET /feed/GetPosts
router.get('/GetPosts' , feedController.getPosts);

// POST /feed/CreatePost
router.post('/CreatePost', feedController.createPosts)

module.exports = router;