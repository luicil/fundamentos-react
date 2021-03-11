import React from 'react'
import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './passoForm'

class Contador2 extends React.Component {

    // state={
    //     numero: this.props.numeroInicial
    // }

    constructor(props) {
        super(props)
        this.state = {
            numero: props.numeroInicial || 0,
            passo: props.passoInicial || 1,
        }
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    decr = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Olá Mundo Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setDec={this.decr} setInc={this.inc}  />
            </div>
        )
    }
}

export default Contador2