import { ArrowBackIos, AttachFile } from "@material-ui/icons";
import React, { useState } from "react";
import "../../css/middlePost.css";
import avatar from "../../assets/avatar.png";

export default function MiddlePost() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  return (
    <>
      <div className="post__write">
        <input
          type="text"
          className="post__input"
          placeholder="Share Something With Your Class"
          onChange={itemEvent}
        />

        {/* Buttons */}
        <div className="post__buttons">
          {/* cancel Button */}
          <div className="cancel__button">
            <button>Cancel</button>
          </div>
          <div className="second__button">
            {/* Attachment Button */}
            <div className="attach__button">
              <AttachFile className="attach__icon" />
            </div>
            {/* Share Button */}
            <div className="share__button">
              <div className="share__btn__arrow">
                <button onClick={listOfItems}>Share</button>
              </div>
              <div className="share__btn__arrow__down">
                <ArrowBackIos className="arrow__down" />
              </div>
            </div>
          </div>
        </div>

        <ol>
          {items.map((itemval) => {
            return (
              <div className="post__written">
                <div className="post__written__avatar">
                  <img src={avatar} alt="..." />
                </div>
                <div className="post__written__title">
                  <p>Teacher</p>
                  <p>12:40 pm</p>
                </div>
                <div className="post__written__content">
                  <p>{itemval}</p>
                </div>
              </div>
            );
          })}
          
        </ol>
      </div>
    </>
  );
}
