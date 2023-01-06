const postModel = require("../models/post.model");

module.exports.allPosts = (req, res) => {
  postModel
    .find((err, docs) => {
      if (!err) return res.status(200).send(docs);
      else return res.status(400).send(`Error to get data ${err}`);
    })
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
