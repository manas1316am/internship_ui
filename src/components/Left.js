import React from "react";
import "../global.css";
import "../css/home.css";
import { Dashboard, School, Settings } from "@material-ui/icons";

function Left() {
  return (
    <div>
      {/* Left */}
      <div className="left">
        <a href="/">
          <div className="left__div">
            <Dashboard className="icon__left" />
            <h3 className="para__left">Dashboard</h3>
          </div>
        </a>

        <a href="/posts">
          <div className="left__div">
            <School className="icon__left" />
            <h3 className="para__left">Lorem</h3>
          </div>
        </a>

        <div className="left__div">
          <Settings className="icon__left" />
          <h3 className="para__left">Ipsum</h3>
        </div>
      </div>
    </div>
  );
}

export default Left;
