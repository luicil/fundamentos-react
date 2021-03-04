/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './app.css'

import Primeiro from './components/basics/primeiro'
import ComParametro from './components/basics/comParametro'
import Fragmento from './components/basics/fragmento'
import Aleatorio from './components/basics/aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/familia'
import FamiliaMembro from './components/basics/familiaMembro'

const tag = <strong>Olá React</strong>

export default ()=> (

    <div className="app">

        <div className="Cards" >

        <Card titulo="Componente com filho" color="#DFFF00" >
                <Familia sobrenome="Fernandes" >
                    <FamiliaMembro nome="Luicil" />
                    <FamiliaMembro nome="Nanci" />
                    <FamiliaMembro nome="Rafael" />
                </Familia>
            </Card>


            <Card titulo="Exemplo de Card" color="#DFFF00" >
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="ComParametro" color="#6495ED" >
                <ComParametro
                    titulo="Componente 2"
                    aluno="Luicil"
                    nota={10}
                />
            </Card>

            <Card titulo = "Tag" color="#DE3163" >
                {tag}
            </Card>

            <Card titulo= "Primeiro" color="#FFA07A" >
                <Primeiro/>
            </Card>

        </div>

    </div>

)