import React, { useState } from "react";
import List from "./List";

export default function Todo() {
  const [text, settext] = useState("");
  const [listitem, setlistitem] = useState([]);

  const handleClick = () => {
    setlistitem((listitem) => listitem.concat(text));
    settext("");
  };

  const deleteVal = (ind) => {
    let newlist = listitem.filter((_, i) => {
      return i != ind;
    });
    setlistitem(newlist);
  };
  const handleChange = (e) => {
    settext(e.target.value);
  };
  const getLen = (string) => {
    if (string.length === 0) return true;
    return false;
  };
  return (
    <div>
      <ul>
        {listitem.length != 0 &&
          listitem.map((items, index) => {
            return (
              <List
                key={items}
                deleteVal={deleteVal}
                index={index}
                items={items}
              />
            );
          })}
      </ul>
      <textarea id="task" onChange={handleChange} value={text}></textarea>
      <button id="btn" disabled={getLen(text)} onClick={() => handleClick()}>
        Add
      </button>
    </div>
  );
}
