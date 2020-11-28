import React from "react";
import "../css/smallGraphBlue.css";
import greenGraph from "../assets/greenGraph.png"
import blueGraph from "../assets/blueGraph.png"

function SmallGraphBlue() {
  return (
    <div>
      <div className="small__graph__blue__bottom">
        <div className="blue__bottom__para">
          <h5>This Month</h5>
        </div>
        <div className="blue__border__bottom__para">
          <h4>+7.8%</h4>
         <img src={blueGraph} alt="..."/>
        </div>
      </div>
      <div className="small__graph__blue__bottom green">
        <div className="blue__bottom__para">
          <h5>Last Month</h5>
        </div>
        <div className="blue__border__bottom__para">
          <h4>+67.4%</h4>
          <img src={greenGraph} alt="..."/>
        </div>
      </div>
    </div>
  );
}

export default SmallGraphBlue;
