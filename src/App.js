import React, { useState } from "react";
import { Form } from "./components/Form";
// import { Entries } from "./components/Entries";
import "./App.css";

const data = [
  {
    id: "d1",
    title: "one",
    con: "oneOne",
  },
  {
    id: "d2",
    title: "two",
    con: "twoTwo",
  },
  {
    id: "d3",
    title: "three",
    con: "threeThree",
  },
];

function App() {
  const [idx, setIdx] = useState("");
  console.log("Mujhe kuu pareshan karre ho");

  const lt = data.map((el) => {
    const clickHandler = () => {
      setIdx(el.id);
    };
    const isIdDame = idx === el.id;

    return (
      <div key={el.id}>
        <p onClick={clickHandler}>{el.title}</p>
        <p className={!isIdDame ? "rotate" : ""}>^</p>
        {isIdDame && <p>{el.con}</p>}
      </div>
    );
  });

  return (
    <div>
      <Form />
      {/* <Entries /> */}

      {/* <div style={{ backgroundColor: "grey" }}>{lt}</div> */}
    </div>
  );
}

export default App;
