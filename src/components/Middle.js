import React from "react";
import "../css/home.css";
import "../global.css";
import ChartBottom from "./ChartBottom";
import Graph from "./Graph";
import Inbox from "./Inbox";
import Notepad from "./Notepad";
import SmallGraphBlue from "./SmallGraphBlue";

function Middle() {
  return (
    <div>
      <div className="middle">
        <input type="text" className="middle__input" placeholder="Search" />
      </div>

      <Graph />
      {/* Middle Bottom */}
      <div className="middle__bottom">
        <Notepad />
        <div className="middle__bottom__chartBottom">
          <ChartBottom />
          <Inbox />
        </div>
        <div className="middle__bottom__small__chart">
          <SmallGraphBlue />
        </div>
      </div>

    </div>
  );
}

export default Middle;
