// Lesson 8

// lesson 7
import './Card.css'
import {useState} from 'react'

const Card = (props) => {
    // const item = props.item;
    // alt 
    const {list, setList, item, index} = props;
    // change name
    let [name, setName] = useState(item.name); 
    // change color
    let [color, setColor] = useState('black');
    console.log(name);
    console.log(index);
    console.log(item);
    // "use..." is called a 'hook'
    // useState() takes an initial state
    // state (the 1st arg) is a 'tracked' state, which means useState() will track the change of this function
    // setState() change the state 
    const getBackgroundColorByAttribute = (attribute) => {
        switch (attribute) {
            case 'Grass':
                return {
                    color: 'white',
                    backgroundColor: 'green'
                }
            case 'Poison':
                return {
                    color: 'purple',
                    backgroundColor: 'magenta'
                }
            case 'Fire':
                return {
                    color: 'orange',
                    backgroundColor: 'red'
                }
            default:
                return {
                    color: 'white',
                    backgroundColor: 'black'
                }
        }
    }

    // const displayDate = () => {
    //     setState(state+1);
    //     console.log(state);
    // }
    return (
        <div>
            <div className='card'>
                <img className='card-image' src={item.image} alt="" />
                <p className='card-number'>#{item.no}</p>
                <h3 className='card-name' style={{color:color}}>{item.name}</h3>
                <div className='card-attribute'>
                    {
                        item.arr.map((cardItem, index) => {
                            return <div className='card-attribute-item' key={index} style={getBackgroundColorByAttribute(cardItem)}>{cardItem}</div>
                        })
                    }
                </div>
                <hr />
                <input type="text" placeholder='name' style={{color:color}} className='card-input' value={name} onChange={
                    (e) => {
                        // console.log(e);
                        setName(e.target.value);
                        // changing color
                        setColor('red');
                    }
                }/>
                {/* <button onClick={displayDate}>Click me</button> */}
                <button className='card-button' onClick={()=>{

                    // setting list to null
                    list[index].name = name;
                    setList([...list])
                }}>Change name</button>
            </div>

        </div>
    )
}

export default Card;


// lesson 6
// import './Card.css'
// import {useState} from 'react'
// import App from './App.jsx'

// const Card = (props) => {
//     const {item,getNameOfCard, list, setList} = props;
//     const cardItem = props.item;
//     // change color
//     let [color, setColor] = useState('black');
//     console.log(cardItem.name);
//     console.log(item);
//     // "use..." is called a 'hook'
//     // useState() takes an initial state
//     // state (the 1st arg) is a 'tracked' state, which means useState() will track the change of this function
//     // setState() change the state 
//     const getBackgroundColorByAttribute = (attribute) => {
//         switch (attribute) {
//             case 'Grass':
//                 return {
//                     color: 'white',
//                     backgroundColor: 'green'
//                 }
//             case 'Poison':
//                 return {
//                     color: 'purple',
//                     backgroundColor: 'magenta'
//                 }
//             case 'Fire':
//                 return {
//                     color: 'orange',
//                     backgroundColor: 'red'
//                 }
//             default:
//                 return {
//                     color: 'white',
//                     backgroundColor: 'black'
//                 }
//         }
//     }

//     const handleClick = () => {
//         getNameOfCard(cardItem.name + "Child");
//     }
//     // const displayDate = () => {
//     //     setState(state+1);
//     //     console.log(state);
//     // }
//     return (
//         <div>
//             <div className='card' onClick={handleClick}>
//                 <img className='card-image' src={item.image} alt="" />
//                 <p className='card-number'>#{item.no}</p>
//                 <h3 className='card-name' style={{color:color}}>{item.name}</h3>
//                 <div className='card-attribute'>
//                     {
//                         item.arr.map((cardItem, index) => {
//                             return <div className='card-attribute-item' key={index} style={getBackgroundColorByAttribute(cardItem)}>{cardItem}</div>
//                         })
//                     }
//                 </div>
                
//             </div>

//         </div>
//     )
// }

// export default Card;

// // lesson 4 and 5
// import './Card.css'
// import {useState} from 'react'

// const Card = (props) => {
//     // const item = props.item;
//     // alt 
//     const {list, setList, item, index} = props;
//     // change name
//     let [name, setName] = useState(item.name); 
//     // change color
//     let [color, setColor] = useState('black');
//     console.log(name);
//     console.log(index);
//     console.log(item);
//     // "use..." is called a 'hook'
//     // useState() takes an initial state
//     // state (the 1st arg) is a 'tracked' state, which means useState() will track the change of this function
//     // setState() change the state 
//     const getBackgroundColorByAttribute = (attribute) => {
//         switch (attribute) {
//             case 'Grass':
//                 return {
//                     color: 'white',
//                     backgroundColor: 'green'
//                 }
//             case 'Poison':
//                 return {
//                     color: 'purple',
//                     backgroundColor: 'magenta'
//                 }
//             case 'Fire':
//                 return {
//                     color: 'orange',
//                     backgroundColor: 'red'
//                 }
//             default:
//                 return {
//                     color: 'white',
//                     backgroundColor: 'black'
//                 }
//         }
//     }

//     // const displayDate = () => {
//     //     setState(state+1);
//     //     console.log(state);
//     // }
//     return (
//         <div>
//             <div className='card'>
//                 <img className='card-image' src={item.image} alt="" />
//                 <p className='card-number'>#{item.no}</p>
//                 <h3 className='card-name' style={{color:color}}>{item.name}</h3>
//                 <div className='card-attribute'>
//                     {
//                         item.arr.map((cardItem, index) => {
//                             return <div className='card-attribute-item' key={index} style={getBackgroundColorByAttribute(cardItem)}>{cardItem}</div>
//                         })
//                     }
//                 </div>
//                 <hr />
//                 <input type="text" placeholder='name' style={{color:color}} className='card-input' value={name} onChange={
//                     (e) => {
//                         // console.log(e);
//                         setName(e.target.value);
//                         // changing color
//                         setColor('red');
//                     }
//                 }/>
//                 {/* <button onClick={displayDate}>Click me</button> */}
//                 <button className='card-button' onClick={()=>{

//                     // setting list to null
//                     list[index].name = name;
//                     setList([...list])
//                 }}>Change name</button>
//             </div>

//         </div>
//     )
// }

// export default Card;