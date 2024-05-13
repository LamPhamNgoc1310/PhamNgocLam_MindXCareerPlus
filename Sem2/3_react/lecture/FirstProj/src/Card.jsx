import './Card.css'

const Card = () => {
    return (
        <div id="app">
            <div className="card">
                <div className="name">Name: Alice</div>
                <div className="age">Age: 20</div>
            </div>
            <div className="card">
                <div className="name">Name: Bob</div>
                <div className="age">Age: 20</div>
            </div>
            <div className="card">
                <div className="name">Name: Cris</div>
                <div className="age">Age: 20</div>
            </div>
        </div>
    )
}

export default Card;