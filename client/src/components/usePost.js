import { useState, useEffect } from "react";
import axios from "axios";

export function usePost(id) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/api/posts/${id}`).then(response => {
      console.log(response);
      setPost(response.data);
    });

    return () => console.log("Peace out.");
  }, []);

  useEffect(() => {
    console.log("Updating");
  });

  return { post, setPost };
}
