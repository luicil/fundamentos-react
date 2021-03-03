/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './app.css'

import Primeiro from './components/basics/primeiro'
import ComParametro from './components/basics/comParametro'
import Fragmento from './components/basics/fragmento'
import Aleatorio from './components/basics/aleatorio'
import Card from './components/layout/Card'

const tag = <strong>Olá React</strong>

export default ()=> (

    <div className="app">

        <div className="Cards" >

            <Card titulo="Exemplo de Card">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="ComParametro">
                <ComParametro
                    titulo="Componente 2"
                    aluno="Luicil"
                    nota={10}
                />
            </Card>

            <Card titulo = "Tag">
                {tag}
            </Card>

            <Card titulo= "Primeiro">
                <Primeiro/>
            </Card>

        </div>

    </div>

)