const router = require("express").Router();
const { allPosts, addPost } = require("../controllers/post.controller");

router.get("/", allPosts);
router.post("/", addPost);

module.exports = router;
