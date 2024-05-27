// Lesson 8

// Lesson 7

// Lesson 6
import './Card.css'

const Card = (props) => {
    console.log(props);
    return (
        <div id="app">
            <div className="card">
                {props.sayHello}
                <div className="name">Name: {props.name}</div>
                <div className="age">Age: {props.age}</div>
                {/* this will print out the children of this tag in App.jsx (which are not here obv) */}
                {props.children}
            </div>
        </div>
    )
}

export default Card;




// Lesson 5
// import './Card.css'

// const Card = (props) => {
//     console.log(props);
//     return (
//         <div id="app">
//             <div className="card">
//                 {props.sayHello}
//                 <div className="name">Name: {props.name}</div>
//                 <div className="age">Age: {props.age}</div>
//                 {/* this will print out the children of this tag in App.jsx (which are not here obv) */}
//                 {props.children}
//             </div>
//         </div>
//     )
// }

// export default Card;