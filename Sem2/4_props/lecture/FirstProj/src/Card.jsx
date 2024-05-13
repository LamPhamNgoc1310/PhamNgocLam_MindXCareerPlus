import './Card.css'

const Card = (props) => {
    console.log(props);
    return (
        <div id="app">
            <div className="card">
                {props.sayHello}
                <div className="name">Name: {props.name}</div>
                <div className="age">Age: {props.age}</div>
            </div>
        </div>
    )
}

export default Card;