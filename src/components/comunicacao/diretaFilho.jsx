/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>{
    return (
        <div>
            <div>{ props.texto }</div>
            <div>{ props.numero }</div>
            <div>{ props.boolean ? "Verdadeiro" : "Falso" }</div>
        </div>

    )
}