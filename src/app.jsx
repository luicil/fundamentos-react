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
import ListaAlunos from './components/repeticao/listaAlunos'
import TabelaProdutos from './components/repeticao/tabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/diretaPai'
import IndiretaPai from './components/comunicacao/indiretaPai'
import Input from './components/formulario/input'


const tag = <strong>Olá React</strong>

export default () => (

    <div className="app">

        <div className="Cards" >


            <Card titulo="Componente Controlado" color="#DD3179" >
                <Input />
            </Card>

            <Card titulo="Comunicação Indireta" color="#DD3163" >
                <IndiretaPai />
            </Card>

            <Card titulo="Comunicação Direta" color="#AFA051" >
                <DiretaPai />
            </Card>

            <Card titulo="Renderização Condicional" color="#AFA020" >
                <ParOuImpar numero={21} />
                <UsuarioInfo usuario={{ nome: 'Luicil' }} />
                <UsuarioInfo usuario={{}} />
            </Card>

            <Card titulo="Repetição Produtos" color="#AFF020" >
                <TabelaProdutos></TabelaProdutos>
            </Card>


            <Card titulo="Lista de Alunos" color="#DFF020" >
                <ListaAlunos></ListaAlunos>
            </Card>

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

            <Card titulo="Tag" color="#DE3163" >
                {tag}
            </Card>

            <Card titulo="Primeiro" color="#FFA07A" >
                <Primeiro />
            </Card>

        </div>

    </div>

)