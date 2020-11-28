import React from "react";
import "../css/middleBottom.css";
import "../global.css";
import Chart from "../assets/Chart.png"

function Graph() {
  return (
    <div>
      <div className="graph__card">
        {/* left */}
        <div className="graph__card__left">
            {/* Text */}
            <h3>Sales Report  <span>September 2020</span></h3>
            {/* chart img */}
            <img  src={Chart} alt="..."/>
        </div>

        {/* right */}
        <div className="graph__card__right">
            {/* Text */}
            <div className="text__top">
                <h3>17 Sep</h3>
            </div>
            {/* Yellow Box */}
           
            <div className="yellow__box">
                <h4>$1,204.33</h4>
                <h5>Revenue</h5>
            </div>
            {/* Green Box */}
            <div className="green__box">
                <h4>33</h4>
                <h5>Quotations</h5>
            </div>
            
        </div>

      </div>
    </div>
  );
}

export default Graph;
