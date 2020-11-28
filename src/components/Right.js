import React from "react";
import "../css/right.css";
import RightsideAdmin from "./RightsideAdmin";

function Right() {
  return (
    <div>
      <div className="right__side">
        <div className="right__side__buttons">
          <h4>Notification</h4>
          <h4>Events</h4>
        </div>

        {/* contents */}
        <RightsideAdmin title="Admin" description="Your Faculty Uploaded the syllabus" time="3" />
        <RightsideAdmin title="Student" description="Your faculty Uploaded the syllabus" time="3" />
        <RightsideAdmin title="Teacher" description="Your faculty uploaded the syllabus" time="3"  />

        {/* see more */}
        <div className="see_more">
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}

export default Right;
