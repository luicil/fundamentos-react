import React from 'react'
import './Contador.css'

class Contador extends React.Component{

// state={
//     numero: this.props.numeroInicial
// }

constructor(props){
    super(props)
    this.state={
        numero: props.numeroInicial || 0,
        passo: props.passoInicial || 1,
     }

     this.inc2 = this.inc2.bind(this)
}
    inc1(){
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    inc2(){
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }    

    inc = () =>{
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }    

    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render(){
        return(
            <div className="Contador">
                <h2>Olá Mundo Contador</h2>
                <p>Valor: {this.state.numero}</p>
                <label htmlFor="passoInput">
                    <input id="passoInput" type="number"
                    value={this.state.passo}
                    onChange={this.setPasso}
                    />
                </label>
                <button onClick={this.inc}>+</button>
                <button onClick={e => this.inc1()}>+</button>
                <button onClick={this.inc2}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador