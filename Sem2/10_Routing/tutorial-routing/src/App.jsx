import Card from "./Card.jsx";
import "./App.css";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const cardList = [
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
      name: "Bulbasaur",
      no: 1,
      arr: ["Grass", "Poison"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png",
      name: "Ivysaur",
      no: 2,
      arr: ["Grass", "Poison"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003.png",
      name: "Venusaur",
      no: 3,
      arr: ["Grass", "Poison"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png",
      name: "Charmander",
      no: 4,
      arr: ["Fire"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/005.png",
      name: "Charmeleon",
      no: 5,
      arr: ["Fire"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png",
      name: "Charizard",
      no: 6,
      arr: ["Fire", "Flying"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png",
      name: "Squirtle",
      no: 7,
      arr: ["Water"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/008.png",
      name: "Wartortle",
      no: 8,
      arr: ["Water"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009.png",
      name: "Blastoise",
      no: 9,
      arr: ["Water"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/010.png",
      name: "Caterpie",
      no: 10,
      arr: ["Bug"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/011.png",
      name: "Metapod",
      no: 11,
      arr: ["Bug"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/012.png",
      name: "Butterfree",
      no: 12,
      arr: ["Bug", "Flying"],
    },
  ];

  const [list, setList] = useState(cardList);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [nameCard, setNameCard] = useState("");
  const [index, setIndex] = useState(0);

  const [searchName, setSearchName] = useState("");
  const [searchAtr, setSearchAtr] = useState("all");

  const [paramsSearch, setParamsSearch] = useState({
    name: "",
    atr: "all",
  });

  const getNameCard = (name) => {
    setNameCard(name);
  };

  const getIndexCard = (index) => {
    setIndex(index);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const onAdd = () => {
    const newCard = {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
      name: searchName,
      no: list.length + 1 + "",
      arr: [searchAtr],
    };
    const newList = [...list];
    newList.unshift(newCard);
    setList(newList);
  };

  /**
   *   ? : true false
   *   && true
   *   || false
   *   ?? undefinded or null
   */

  return (
    <div>
      <div>
        <h1>List Pokemon</h1>
        <input
          placeholder="Search tên"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
        <select
          value={searchAtr}
          onChange={(e) => {
            setSearchAtr(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="Grass">Grass</option>
          <option value="Poison">Poison</option>
          <option value="Fire">Fire</option>
          <option value="Flying">Flying</option>
          <option value="Water">Water</option>
          <option value="Bug">Bug</option>
        </select>
        <button onClick={onAdd}>Add</button>
      </div>
      <hr />
      <div className="app">
        {list.map((card, index) => {
          return (
            <Card
              item={card}
              key={index} // unique key
              index={index}
              setIsOpen={setIsOpen}
              getNameCard={getNameCard}
              getIndexCard1234567={getIndexCard}
              list={list}
              setList={setList}
            />
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          type="text"
          placeholder="Ten"
          className="card-input"
          value={nameCard}
          onChange={(e) => {
            setNameCard(e.target.value);
          }}
        />
        <button
          className="card-button"
          onClick={() => {
            list[index].name = nameCard;
            setList([...list]);
            setIsOpen(false);
          }}
        >
          Thay đổi
        </button>
      </Modal>
    </div>
  );
}

export default App;