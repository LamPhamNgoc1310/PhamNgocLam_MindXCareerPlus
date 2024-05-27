// Lesson 8


// Lesson 7
import './App.css';
import ShowName from './ShowName';
import { useState } from 'react';
function App() {
  const [isFilter, setIsFilter] = useState(false);
  const [arr, setArr] = useState([
    {
      fullName: 'mindX',
      age: 10,
    },
    {
      fullName: 'lam',
      age: 20,
    },
    {
      fullName: 'lam2',
      age: 15,
    },
  ]);

  return (
    <>
      <h1>Hello Lam</h1>
      <input
        type="checkbox"
        id="filter"
        checked={isFilter}
        onChange={() => {
          setIsFilter(!isFilter);
        }}
      />{' '}
      <label htmlFor="filter">Filtering</label>
      {arr
        .filter((item) => {
          return isFilter ? item.age <= 15 : true;
        })
        .map((item) => {
          return <ShowName fullName={item.fullName} />;
        })}
    </>
  );
}

export default App;


// import './App.css'
// import { useState } from 'react'
// import Input from './Input.jsx'
// import Card from './Card.jsx'

// // Lesson 6: States and Events 2
// const App = () => {
//   // original fullName without using state
//   // const fullName = "Pham Ngoc Lam"
//   // fullName with using state
//   const [fullName, setFullName] = useState("Input the full name")
//   const onClickMe = (e) => {

//   } 
//   const handleSubmit = (event) => {
//     // preventing submit from submit when clicked 
//     event.preventDefault()

//   }
//   // When handling changes, you must change the state of fullName
//   const handleChange = (e) => {
//     // console.log(e.target)
//     setFullName(e.target.value)
//   }
//   // <Input></Input>
//   return (
//     <div className="app">
//       <h1>Hello world</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="fullName" value={fullName} onChange={handleChange} />
//         <button type="submit">Submit</button>
//         {/* using ternary operator */}
//         {!fullName ? <p>You haven't given a name</p> : ''}
//       </form>

//     </div>
//   )
// }

// export default App



// import './App.css'


// import { useState } from 'react'
// import Card from './Card.jsx'

// // Lesson 5: States and Events
// const App = () => {
//   //  this is solely for saving data (not functions), when updated, the data will be re-rendered.
//   const [count, setCount] = useState(0)

//   const [person, setPerson] = useState({
//     // person takes the name in referenced state, which means the function saves the address of the memory
//     name: 'MindX'
//   })

//   const onClickMe = () => {
//     // the setCount function takes in a NEW value 
//     setCount(count + 1);
//   }
//   return (
//     <div className='App'>
//       <h1>Hello {person.name}</h1>
//       <Card name="Lam" age={10} sayHello={<h1>"Hellow Wrodl"</h1>}>
//         <p>Count: {count}</p>
//         <button onClick={onClickMe}>Click</button>
//         <button
//           // onClick={() => {
//           //   person.name = "John Doe";
//           //   setPerson(person);
//           //  }}
//           onClick={() => {
//             person.name = "John Doe";
//             // to update the setState with new data, we must provide the new object, this address will contain information of previous addresses.
//             setPerson({...person}); // spreading all the keys and values of person.
//            }}
//         >Change your name </button>
//       </Card>
//     </div>

//   )
// }




// // Lesson 4: Props
// // const App = () => {
// //   return (
// //     <div className='App'>
// //       <Card name="Lam" age={10} sayHello="Hellow Wrodl"/>
// //     </div>

// //   )
// // }

// export default App
