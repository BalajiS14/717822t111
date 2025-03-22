import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://20.244.56.144/test/trending-posts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error("Error fetching trending posts:", error);
      });
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Post ID:</strong> {post.id} <br />
            <strong>Comments:</strong> {post.commentCount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
