import React from 'react';

const Input = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <input type="text" value={props.fullName} onChange = {props.handleChange} />
        </div>
    )
}

export default Input;