import './Card.css'

const Card = (props) => {
    const cardItem = props.item;

    // 
    const getBackgroundColorByAttribute = (attribute) => {
        switch (attribute) {
            case 'Grass':
                return {
                    color: 'green',
                    backgroundColor: 'white'
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

    return (
        <div>
            <div className='card'>
                <img className='card-image' src={cardItem.image} alt="" />
                <p className='card-number'>#{cardItem.no}</p>
                <h3 className='card-name'>{cardItem.name}</h3>
                <div className='card-attribute'>
                    {
                        cardItem.arr.map((item, index) => {
                            return <div className='card-attribute-item' key={index} style={{backgroundColor:getBackgroundColorByAttribute(item)}}>{item}</div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Card;