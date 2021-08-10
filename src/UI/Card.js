import React from "react";
import "./UI.css";

export const Card = (props) => {
  const cls = "card " + props.className;
  return <div className={cls}>{props.children}</div>;
};
