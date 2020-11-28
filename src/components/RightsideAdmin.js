import React from 'react'
import "../css/rightsideAdmin.css"

function RightsideAdmin({title, description, time}) {
    return (
        <div>
            <div className="avatar">
                {/* face */}
                <div className="face" style={{backgroundColor:"lightpink" }}></div>
                <div className="avatar__title">
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{time} minutes ago</p>
                </div>

            </div>
        </div>
    )
}

export default RightsideAdmin
