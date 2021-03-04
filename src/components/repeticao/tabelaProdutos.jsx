import React from 'react'
import aProdutos from '../../data/produtos'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>{

    function getProdutos(){
        return aProdutos.map(produto =>{
            return (
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nomeProd}</td>
                    <td>{produto.precoProd.toFixed(2)}</td>
                </tr>
            )
        })
    };

    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getProdutos()}
                </tbody>
            </table>
        </div>
    )
}