import React from 'react'

export default function Aleatorio(props) {
    console.log(props)
    var nro = parseInt(Math.random() * (props.max - props.min) + props.min)
    var sNro = nro.toString();
    console.log(nro);
    console.log(sNro);
    return(
        <React.Fragment>
             <h2>Número aleatório: { sNro } </h2>
        </React.Fragment>
    )
}