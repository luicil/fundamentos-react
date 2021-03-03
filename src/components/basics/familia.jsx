import React from 'react'
import FamiliaMembro from './familiaMembro'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    return(
        <div>
            <FamiliaMembro nome="Luicil" sobrenome="Fernandes" />
            <FamiliaMembro nome="Nanci" sobrenome="Fernandes" />
            <FamiliaMembro nome="Rafael" sobrenome="Fernandes" />
        </div>
    )

}