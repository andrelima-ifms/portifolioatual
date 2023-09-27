import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
import React from 'react'
type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}


export default function Main() {
  
    const [texto,setTexto]=useState("")

    const filmes:FilmeType[] = [
        {
            id:1,
            titulo:'Projeto de Basquete',
            sinopse:"Projeto que realizei com a Professora Catia, onde em horarios a tarde ocorria treinos de basquete na parte da tarde no IFMS campus Navirai",
            imagem:'/baska.png'
        },
        {
            id:2,
            titulo:'Festival da cores',
            sinopse:'No festival das cores ajudei a produzir os pós coloridos que seriam utilizados no evento.',
            imagem:'/cores.jpeg'
        },
        {
            id:3,
            titulo:'Curso Pericia criminal',
            sinopse:'Mini curso EAD de pericia criminal que realizei.',
            imagem:'/crime.png'
        },
        {
            id:4,
            titulo:'Artesanato em Purunga',
            sinopse:"Oficina de artesanto que realizei em 2022 no Festival de arte e cultura do IFMS.",
            imagem:'/galinha.png'
        },
    ]

   
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
      
        setTexto(e.target.value)
    }
    return (
        <>
           
            
            <div className='Sobremim'>
                 Sou um aluno do IFMS, onde faço o ensino médio integrado de técnico em informatica para internet.
                 Onde benza Deus temos o professor careca mais legal do mundo, Guilherme FIgueiredo Terenciani, vulgo Tere, careca ou gordin 
                 OBS: ele me ama e eu amo ele.

            </div>    



            <div className="campo_pesquisa">
                <p>Busca</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquisar'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>

            <main className="content-main">
          
             
                
                {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                sinopse={filme.sinopse}
                                titulo={filme.titulo}
                                imagem={filme.imagem}
                            />
                    )
                }


	

                
            </main>
        </>
    )
}