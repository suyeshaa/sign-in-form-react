import React from "react";
import "./Modal1.css";

export const Modal1 = (props) => {
  const { condition } = props;

  const clickHandler = () => {
    condition(false);
  };

  return (
    <div className="modal1">
      <div className="modal1cont">
        <div className="top">Invalid input</div>
        <div className="btm">
          <p>Please enter a valid name and age (non-empty values)</p>
          <button onClick={clickHandler}>Okay!</button>
        </div>
      </div>
    </div>
  );
};
