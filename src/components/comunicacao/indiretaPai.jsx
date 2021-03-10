import React, {useState} from 'react'
import IndiretaFilho from './indiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{

    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function FornecerInformacoes(nome, idade, nerd){
        console.log(nome, idade, nerd)
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
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