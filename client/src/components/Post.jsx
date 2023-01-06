const Post = ({ title, content, author }) => {
  return (
    <div className="post">
      <div>
        <h1 className="post__title">{title}</h1>
        <p className="post__content">{content}</p>
      </div>
      <p className="post__author">{author}</p>
    </div>
  );
};

export default Post;
