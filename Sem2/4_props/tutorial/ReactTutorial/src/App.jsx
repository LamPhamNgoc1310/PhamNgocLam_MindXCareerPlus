// Lesson 7
import React from 'react'
import './App.css'
import Card from './Card.jsx'
import { useState } from 'react'

const App =() => {
  const cardList = [
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
          name: "Bulbasaur",
          no: "0001",
          arr: ["Grass", "Poison"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png",
          name: "Ivysaur",
          no: "0002",
          arr: ["Grass", "Poison"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003.png",
          name: "Venusaur",
          no: "0003",
          arr: ["Grass", "Poison"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png",
          name: "Charmander",
          no: "0004",
          arr: ["Fire"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/005.png",
          name: "Charmeleon",
          no: "0005",
          arr: ["Fire"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png",
          name: "Charizard",
          no: "0006",
          arr: ["Fire", "Flying"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png",
          name: "Squirtle",
          no: "0007",
          arr: ["Water"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/008.png",
          name: "Wartortle",
          no: "0008",
          arr: ["Water"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009.png",
          name: "Blastoise",
          no: "0009",
          arr: ["Water"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/010.png",
          name: "Caterpie",
          no: "0010",
          arr: ["Bug"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/011.png",
          name: "Metapod",
          no: "0011",
          arr: ["Bug"]
        },
        {
          image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/012.png",
          name: "Butterfree",
          no: "0012",
          arr: ["Bug", "Flying"]
        },
      ]
      const [list, setList] = useState(cardList);
      // const arr = [1,2,3,4,5,6]
      // // const arr1 = [
      // //   <Card />,
      // //   <Card />,
      // //   <Card />
      // // ]
      // const arr2 =[
      //   <Card item={cardList[0]}/>,
      //   <Card item={cardList[1]}/>,
      //   <Card item={cardList[2]}/>
      // ]
      return (
        <div className='app'>
          {/* displaying all the element of the array one by one next to each other 
          it cannot take in an object*/}
          {/* {arr} */}
           {/*displaying a Card  */}
          {/* {arr1} */}
          {/* displaying the cardList's items */}
          {/* {arr2} */}
          {
            cardList.map((card, index) => {
              return <Card item={card} key={index} />
            })
          }
        </div>
      )
    }
export default App;


// // Lesson 6
// import React from 'react'
// import './App.css'
// import Card from './Card.jsx'
// import { useState } from 'react'
// import Modal from 'react-modal'

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };


// function App() {
//   const [modalIsOpen, setIsOpen] = useState(true);
//   const [nameCard, setNameCard] = useState("");

//   function openModal() {
//     setIsOpen(true);
//   }

//   // function afterOpenModal() {
//   //   // references are now sync'd and can be accessed.
//   //   subtitle.style.color = '#f00';
//   // }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   const cardList = [
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
//       name: "Bulbasaur",
//       no: "0001",
//       arr: ["Grass", "Poison"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png",
//       name: "Ivysaur",
//       no: "0002",
//       arr: ["Grass", "Poison"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003.png",
//       name: "Venusaur",
//       no: "0003",
//       arr: ["Grass", "Poison"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png",
//       name: "Charmander",
//       no: "0004",
//       arr: ["Fire"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/005.png",
//       name: "Charmeleon",
//       no: "0005",
//       arr: ["Fire"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png",
//       name: "Charizard",
//       no: "0006",
//       arr: ["Fire", "Flying"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png",
//       name: "Squirtle",
//       no: "0007",
//       arr: ["Water"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/008.png",
//       name: "Wartortle",
//       no: "0008",
//       arr: ["Water"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009.png",
//       name: "Blastoise",
//       no: "0009",
//       arr: ["Water"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/010.png",
//       name: "Caterpie",
//       no: "0010",
//       arr: ["Bug"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/011.png",
//       name: "Metapod",
//       no: "0011",
//       arr: ["Bug"]
//     },
//     {
//       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/012.png",
//       name: "Butterfree",
//       no: "0012",
//       arr: ["Bug", "Flying"]
//     },
//   ]
//   const [list, setList] = useState(cardList);
//   const getNameOfCard = (name) => {
//     console.log(name)
//   }
//   return (
//     <div>
//       <div>

//       </div>
//       <hr />
//       <div className="app">
//         {
//           cardList.map((card, index) => {
//             return <Card 
//             item={card} 
//             key={index}
//             // this is piping the getNameOfCard function to the <Card> child element
//             getNameOfCard={getNameOfCard}
//              />
//           })
//         }

//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         // onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//         >

//         <h2>Hello</h2>
//         </Modal>
//     </div>
//   )
// }

// export default App



// // // Lesson 4
// // import './App.css'
// // import Card from './Card.jsx'
// // import { useState } from 'react'
// // function App() {
// //   const cardList = [
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
// //       name: "Bulbasaur",
// //       no: "0001",
// //       arr: ["Grass", "Poison"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png",
// //       name: "Ivysaur",
// //       no: "0002",
// //       arr: ["Grass", "Poison"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003.png",
// //       name: "Venusaur",
// //       no: "0003",
// //       arr: ["Grass", "Poison"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png",
// //       name: "Charmander",
// //       no: "0004",
// //       arr: ["Fire"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/005.png",
// //       name: "Charmeleon",
// //       no: "0005",
// //       arr: ["Fire"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png",
// //       name: "Charizard",
// //       no: "0006",
// //       arr: ["Fire", "Flying"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png",
// //       name: "Squirtle",
// //       no: "0007",
// //       arr: ["Water"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/008.png",
// //       name: "Wartortle",
// //       no: "0008",
// //       arr: ["Water"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009.png",
// //       name: "Blastoise",
// //       no: "0009",
// //       arr: ["Water"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/010.png",
// //       name: "Caterpie",
// //       no: "0010",
// //       arr: ["Bug"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/011.png",
// //       name: "Metapod",
// //       no: "0011",
// //       arr: ["Bug"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/012.png",
// //       name: "Butterfree",
// //       no: "0012",
// //       arr: ["Bug", "Flying"]
// //     },
// //   ]
// //   const [list, setList] = useState(cardList);
// //   // const arr = [1,2,3,4,5,6]
// //   // // const arr1 = [
// //   // //   <Card />,
// //   // //   <Card />,
// //   // //   <Card />
// //   // // ]
// //   // const arr2 =[
// //   //   <Card item={cardList[0]}/>,
// //   //   <Card item={cardList[1]}/>,
// //   //   <Card item={cardList[2]}/>
// //   // ]
// //   return (
// //     <div className='app'>
// //       {/* displaying all the element of the array one by one next to each other 
// //       it cannot take in an object*/}
// //       {/* {arr} */}
// //        {/*displaying a Card  */}
// //       {/* {arr1} */}
// //       {/* displaying the cardList's items */}
// //       {/* {arr2} */}
// //       {
// //         cardList.map((card, index) => {
// //           return <Card item={card} key={index} />
// //         })
// //       }
// //     </div>
// //   )
// // }

// // export default App



// // // Lesson 5
// // import './App.css'
// // import Card from './Card.jsx'
// // import { useState } from 'react'
// // function App() {
// //   const cardList = [
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
// //       name: "Bulbasaur",
// //       no: "0001",
// //       arr: ["Grass", "Poison"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png",
// //       name: "Ivysaur",
// //       no: "0002",
// //       arr: ["Grass", "Poison"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003.png",
// //       name: "Venusaur",
// //       no: "0003",
// //       arr: ["Grass", "Poison"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png",
// //       name: "Charmander",
// //       no: "0004",
// //       arr: ["Fire"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/005.png",
// //       name: "Charmeleon",
// //       no: "0005",
// //       arr: ["Fire"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png",
// //       name: "Charizard",
// //       no: "0006",
// //       arr: ["Fire", "Flying"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png",
// //       name: "Squirtle",
// //       no: "0007",
// //       arr: ["Water"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/008.png",
// //       name: "Wartortle",
// //       no: "0008",
// //       arr: ["Water"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009.png",
// //       name: "Blastoise",
// //       no: "0009",
// //       arr: ["Water"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/010.png",
// //       name: "Caterpie",
// //       no: "0010",
// //       arr: ["Bug"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/011.png",
// //       name: "Metapod",
// //       no: "0011",
// //       arr: ["Bug"]
// //     },
// //     {
// //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/012.png",
// //       name: "Butterfree",
// //       no: "0012",
// //       arr: ["Bug", "Flying"]
// //     },
// //   ]
// //   const [list, setList] = useState(cardList);
// //   // const arr = [1,2,3,4,5,6]
// //   // // const arr1 = [
// //   // //   <Card />,
// //   // //   <Card />,
// //   // //   <Card />
// //   // // ]
// //   // const arr2 =[
// //   //   <Card item={cardList[0]}/>,
// //   //   <Card item={cardList[1]}/>,
// //   //   <Card item={cardList[2]}/>
// //   // ]
// //   return (
// //     <div className='app'>
// //       {/* displaying all the element of the array one by one next to each other 
// //       it cannot take in an object*/}
// //       {/* {arr} */}
// //        {/*displaying a Card  */}
// //       {/* {arr1} */}
// //       {/* displaying the cardList's items */}
// //       {/* {arr2} */}
// //       {
// //         list.map((card, index) => {
// //           return <Card item={card} key={index} list={list} setList={setList}  index={index} />
// //         })
// //       }
// //     </div>
// //   )
// // }

// // export default App



// // // // Lesson 4
// // // import './App.css'
// // // import Card from './Card.jsx'
// // // import { useState } from 'react'
// // // function App() {
// // //   const cardList = [
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
// // //       name: "Bulbasaur",
// // //       no: "0001",
// // //       arr: ["Grass", "Poison"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png",
// // //       name: "Ivysaur",
// // //       no: "0002",
// // //       arr: ["Grass", "Poison"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003.png",
// // //       name: "Venusaur",
// // //       no: "0003",
// // //       arr: ["Grass", "Poison"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png",
// // //       name: "Charmander",
// // //       no: "0004",
// // //       arr: ["Fire"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/005.png",
// // //       name: "Charmeleon",
// // //       no: "0005",
// // //       arr: ["Fire"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png",
// // //       name: "Charizard",
// // //       no: "0006",
// // //       arr: ["Fire", "Flying"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png",
// // //       name: "Squirtle",
// // //       no: "0007",
// // //       arr: ["Water"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/008.png",
// // //       name: "Wartortle",
// // //       no: "0008",
// // //       arr: ["Water"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009.png",
// // //       name: "Blastoise",
// // //       no: "0009",
// // //       arr: ["Water"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/010.png",
// // //       name: "Caterpie",
// // //       no: "0010",
// // //       arr: ["Bug"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/011.png",
// // //       name: "Metapod",
// // //       no: "0011",
// // //       arr: ["Bug"]
// // //     },
// // //     {
// // //       image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/012.png",
// // //       name: "Butterfree",
// // //       no: "0012",
// // //       arr: ["Bug", "Flying"]
// // //     },
// // //   ]
// // //   const [list, setList] = useState(cardList);
// // //   // const arr = [1,2,3,4,5,6]
// // //   // // const arr1 = [
// // //   // //   <Card />,
// // //   // //   <Card />,
// // //   // //   <Card />
// // //   // // ]
// // //   // const arr2 =[
// // //   //   <Card item={cardList[0]}/>,
// // //   //   <Card item={cardList[1]}/>,
// // //   //   <Card item={cardList[2]}/>
// // //   // ]
// // //   return (
// // //     <div className='app'>
// // //       {/* displaying all the element of the array one by one next to each other 
// // //       it cannot take in an object*/}
// // //       {/* {arr} */}
// // //        {/*displaying a Card  */}
// // //       {/* {arr1} */}
// // //       {/* displaying the cardList's items */}
// // //       {/* {arr2} */}
// // //       {
// // //         cardList.map((card, index) => {
// // //           return <Card item={card} key={index} />
// // //         })
// // //       }
// // //     </div>
// // //   )
// // // }

// // // export default App
