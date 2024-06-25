import React, { useState } from 'react'
import { useContext } from 'react';
import CheckBoxContext from '../context/CheckBoxStatus';

export default function Active() {
  const [detail, setDetail] = useState("");
  const [items, setItems] = useState([]);
  const checkBoxCtx = useContext(CheckBoxContext)
  // Helper functions
  function addDetail() {
    // if no item typed in
    if (!detail) {
      alert("Please enter something in the box");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: detail
    };

    setItems(oldList => [...oldList, item]);

    setDetail("");

    console.log(items);
  }
  return (
    <div>
      <input type="text"
        className="all-add-details"
        placeholder="add detail"
        value={detail}
        onChange={e => setDetail(e.target.value)} />
      <button onClick={addDetail}>
        Add
      </button>

      {/* 3. list of all items  */}
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="todo-item">
              <input type="checkbox" onChange={(e)=>console.log(e.target.checked)}/>{item.value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
