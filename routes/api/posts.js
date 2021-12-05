const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    Test Route: Get all posts
// @access  Public
router.get('/', (req, res) => {
    res.send('Post route');
});

module.exports = router;