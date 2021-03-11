/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'
import './input.css'

export default props =>{

    const [valor, setValor] = useState("Inicial")

    function qMudar(e) {
        setValor(e.target.value)
        console.log(e)
    }

    return(
        <div className="input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={qMudar} />
                <input value={valor} readOnly />
                <input value ={undefined} />
            </div>
        </div>
    )
}