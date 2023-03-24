import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = (e) => {
    e.preventDefault();

    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("returns");
  };

  return (
    <div style={{ textAlign: "center", width: "90%", margin: "auto auto" }}>
      <h1>REPORT A CRIME</h1>
 
      <Button
        onClick={() => navigate("posts")}
        variant="outline-success"
        style={{ width: "100%" }}
      >
        ALL POSTS
      </Button> 
    </div>
  );
}

export default CreatePost;
