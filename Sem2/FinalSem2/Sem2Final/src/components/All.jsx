import React, { useState } from 'react'


export default function All() {
    // States, hooks
    const [detail, setDetail] = useState("");
    const [items, setItems] = useState ([]);


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

    function deleteDetail(id) {
        const newList = items.filter(item => item.id !== id);
        setItems(newList)
    }
    return (
        <div>
            {/* 2. input and add button  */}
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
                            <input type="checkbox"/>{item.value}
                            <button onClick={() => deleteDetail(item.id)}>🗑️</button>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}


