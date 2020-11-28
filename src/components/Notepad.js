import React, { useState } from "react";
import "../css/notepad.css";
// import NotepadContent from "./NotepadContent";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const Notepad = () => {
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

  const classes = useStyles();

  return (
    <>
      <div className="notepad">
        <div className="notepad__title">
          <h3>Notepad</h3>
        </div>
        <div className="input__enter">
          <input type="text" placeholder="Add Your note" onChange={itemEvent} />
        </div>

        <div className={classes.root} id="manas">
          <button onClick={listOfItems}>
            <Avatar className={classes.orange}>+</Avatar>
          </button>
        </div>
      

      <ol>
        {items.map((itemval) => {
          return(
            <div className="notepad__content">
              {/* title */}
              <h4>Title</h4>

              {/* content */}
              <h5>{itemval}</h5>
            </div>
          );

        })}
      </ol>
      </div>
    </>
  );
};

export default Notepad;
