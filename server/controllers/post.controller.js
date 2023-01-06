const postModel = require("../models/post.model");

module.exports.allPosts = (res) => {
  postModel
    .find((err, docs) => !err ? res.status(200).send(docs):res.status(400).send(`Error to get data ${err}`))
    .sort({ createdAt: -1 });
};

module.exports.addPost = async (req, res) => {
  const newPost = new postModel({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  try{
    const post = await newPost.save();
    return res.status(201).json(post);
  }catch(err){
    return res.status(400).json({message: err});
  }
};
