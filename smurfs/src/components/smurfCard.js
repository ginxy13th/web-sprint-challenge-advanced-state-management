import React from 'react';


const SmurfCard = (props) => {
    

    return (
        <div>
            <h4>{props.characters.name}</h4>
            <p>Age: {props.characters.age}cm</p>
            <p>Height: {props.characters.height}</p>

        </div>
    )
}

export default SmurfCard