import React from "react";

import Left from "../Left";
import MiddlePost from "./MiddlePost";
import "../../css/post.css";
import Postwritten from "./Postwritten";

const Post = () => {
  return (
    <div className="post">
      <Left />
      {/* middle */}
      <div className="middle">
        <MiddlePost />
        <Postwritten /> 
        <Postwritten /> 
        <Postwritten /> 

      </div>
    </div>
  );
};

export default Post;
