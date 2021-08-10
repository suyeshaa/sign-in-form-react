import React from "react";
import { Card } from "../UI/Card";
import "./Entries.css";

export const Entries = (props) => {
  const { list } = props;
  const lt = list.map((el) => {
    return (
      <Card className="block" key={el.key}>
        <div className="dissect">
          <span className="name">{el.name}</span>
          <span className="age">{el.age}</span>
        </div>
      </Card>
    );
  });

  return lt;
};
