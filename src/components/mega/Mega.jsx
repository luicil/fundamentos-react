/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import './Mega.css'

export default props => {

    const [qtde, setQtde] = useState(props.qtd || 6)
    const [numeros, setNumero] = useState(Array(qtde).fill(0))

    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="qtdeNro">Qtde. Números</label>
                <input id="qtdeNro" type="number" 
                value={qtde}
                onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumero(geraNumeros(qtde))}>
                Gerar Números
            </button>
        </div>
    )

    function geraNumeros(qtd){
        const nros = Array(qtd).fill(0).reduce((nums) =>{
                const novoNro = geraNumeroNaoContido(1, 60, nums)
                return [ ...nums, novoNro ]
            },[]).sort((n1, n2) => n1 - n2)
    
        return nros
    }
    
    function geraNumeroNaoContido(min, max, array) {
        const nro = parseInt(Math.random() * ((max +1) - min) + min)
        return array.includes(nro) ? 
            geraNumeroNaoContido(min, max, array) : 
            nro
    }

}
