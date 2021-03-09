import React from 'react'
import If, {Else} from './if.js'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{

    const usuario = props.usuario || {}

    return(
        <If test={usuario && usuario.nome}>
            <div>
                Bem vindo <strong>{ usuario.nome }</strong>
            </div>
            <Else>
                <div>
                    Bem vindo fulano !
                </div>
            </Else>
        </If>
    )
    
}