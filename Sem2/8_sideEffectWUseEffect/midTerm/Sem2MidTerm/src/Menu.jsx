import { useState } from 'react'
import React from 'react'
import './Menu.css'

function Menu(props) {
    const item = props.item;

    return (
        <div className="explore">
            <div className="explore-content">
                <h4>Explore</h4>
                <p>What are you gonna watch today?</p>
                <div className='explore-img'>
                    <img src={item.image} alt="" />
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Menu