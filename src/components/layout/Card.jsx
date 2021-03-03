/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import  './Card.css'

export default props => {

    const cardStyles = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00",
    }

    return(
    <div className="Card" style = { cardStyles } >
        <div className="Title">
            { props.titulo }
        </div>
        <div className="Content">
            {props.children}
        </div>
    </div>
    );
};