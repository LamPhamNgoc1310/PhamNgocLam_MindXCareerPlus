import './Card.css'

const Card = (parameter) => {
    return (
        <div>
            <div className='card'>
                <img className='card-image' src={parameter.img} alt="" />
                <p className='card-number'>#{parameter.number}</p>
                <h3 className='card-name'>{parameter.name}</h3>
                <div className='card-attribute'>
                    <div className='card-attribute-item1'>Grass</div>
                    <div className='card-attribute-item2'>Poison</div>
                </div>
            </div>
            
        </div>
    )
}

export default Card;