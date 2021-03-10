import React from 'react'
import IndiretaFilho from './indiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{

    let nome = "?"
    let idade = 0
    let nerd = false

    function FornecerInformacoes(nomeParam, idadeParam, nerdParam){
        console.log(nomeParam, idadeParam, nerdParam)
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
    }

    return (
        <div>
            Pai
            <span> {nome} </span>
            <span>{idade} </span>
            <span>{nerd ? "Verdadeiro" : "Falso"}</span>
            <IndiretaFilho quandoClicar = {FornecerInformacoes}></IndiretaFilho>
        </div>
    )
}