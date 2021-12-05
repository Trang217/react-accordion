import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, id, info }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="question" key={id}>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show ? <p>{info}</p> : ""}
    </div>
  );
};

export default Question;
