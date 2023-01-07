import { Children } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Post from "./Post";

function ListPost() {
  const { data: posts, isLoading} = useQuery(["post"], getPosts);


  async function getPosts(){
    const res = await axios.get("http://localhost:5000");
    return res.data;
  }

  if(isLoading){
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="list__post">
      {Children.toArray(posts?.map((post) => <Post {...post} />))}
    </div>
  );
}

export default ListPost;
