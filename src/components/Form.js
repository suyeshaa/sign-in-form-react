import React, { useState } from "react";
import { Card } from "../UI/Card";
import "./Form.css";
import { Entries } from "./Entries";
import { Modal1 } from "./Modal1";

export const Form = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [state, setstate] = useState([]);
  const [condn, setcondn] = useState(false);

  const nameChangeHandler = (e) => {
    setname(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setage(e.target.value);
  };

  // const data = [];
  // let nm, a;
  const clickHandler = () => {
    const temp = {
      key: Math.random(),
      name,
      age,
    };

    if (name.trim().length !== 0 && age.trim().length !== 0 && age > 0) {
      setstate((prev) => [...prev, temp]);
      setname("");
      setage("");
    } else if (name.trim().length === 0 || age.trim().length === 0) {
      setcondn(true);
    }

    if (age < 0) {
      setcondn(true);
    }
  };

  return (
    <div>
      <Card className="form">
        <label>Username</label>
        <input type="text" value={name} onChange={nameChangeHandler} />
        <label>Age (Years)</label>
        <input type="number" value={age} onChange={ageChangeHandler} />
        <button className="btn" onClick={clickHandler}>
          Add User
        </button>
      </Card>
      <Entries list={state} />;{condn && <Modal1 condition={setcondn} />}
    </div>
  );
};
