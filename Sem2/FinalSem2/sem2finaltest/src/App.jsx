import './App.css'
import { useState } from 'react';

function App() {
  // States, hooks
  const [tab, setTab] = useState("all")
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState([
    {
      id: 1,
      value: "Go to school",
      status: "active",
    },
    {
      id: 2,
      value: "Wake up",
      status: "completed",
    }
  ]);

  // Helper functions
  function addItem() {
    // if no item typed in
    if (!input) {
      alert("Please enter something in the box");
      return;
    }

    const item = {
      id: itemList[itemList.length+1].id + 1,
      value: input,
      status: "active",
    };

    setItemList((itemList) => [...itemList, item]);
    setInput("");

  }

  function deleteItem(id) {
    // filter out items with different id from the chosen item.
    const newList = itemList.filter((item) => item.id !== id);
    setItemList(newList)
  }
  return (
    <>
      <div className='App'>
        {/* 1. Header */}
        <h1>#todo</h1>
        <button onClick={() => setTab("all")}>
          All
        </button>

        <button onClick={() => setTab("active")}>
          Active
        </button>

        <button onClick={() => setTab("completed")}>
          Completed
        </button>
        {/* 2. input and add button  */}
        {/* Display the input box if tab is not 2 */}
        {
          tab !== "completed" && (
            <div>
              <input type="text"
                className="all-add-items"
                placeholder="add detail"
                value={input}
                onChange={e => setInput(e.target.value)} />
              <button onClick={addItem}>
                Add
              </button>
            </div>
          )}

        {/* 3. list of all items  */}
        <ul>
          {itemList.map((item) => {
            return (
              <li key={item.id} className="todo-item">
                <input type="checkbox" />{item.value}
                <button onClick={() => deleteItem(item.id)}>🗑️</button>
              </li>
            )
          })}
        </ul>

      </div>
    </>
  )
}

export default App
