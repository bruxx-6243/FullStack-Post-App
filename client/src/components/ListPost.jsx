import { useState, useEffect, Children } from "react";
import axios from "axios";
import Post from "./Post";

function ListPost() {
  const [posts, setPosts] = useState([]);

  const handlePosts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000");
      setPosts(data);
    } catch (err) {
      console.log(`Failed to load data error: ${err.message}`);
    }
  };

  useEffect(() => {
    handlePosts();
  }, []);

  return (
    <div className="list__post">
      {Children.toArray(posts.map((post) => <Post {...post} />))}
    </div>
  );
}

export default ListPost;
