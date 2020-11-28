import React from "react";

import "../css/home.css";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";


function Home() {
  return (
    <div className="home__div">
      <Left />
      <Middle />
      <Right />
      
    </div>
  );
}

export default Home;
