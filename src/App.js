import React, { useState } from 'react';
import './App.css';
import './responsivo.css';
import './reset.css';


import imgChopper from './imagens/personagem-tony-chopper.png';
import imgLuffy from './imagens/personagem-monkey-d-luffy.png';
import imgNami from './imagens/personagem-nami.png';
import imgZoro from './imagens/personagem-roronoa-zoro.png';
import imgSanji from './imagens/personagem-sanji.png';

import imgChopperPng from './imagens/tripulacao-chopper.png';
import imgLuffyPng from './imagens/tripulacao-luffy.png';
import imgNamiPng from './imagens/tripulacao-nami.png';
import imgZoroPng from './imagens/tripulacao-zoro.png';
import imgSanjiPng from './imagens/tripulacao-sanji.png';


function App() {
    const personagens = [
      {
        img: imgChopper,
        nome: "Tony Chopper",
        descricao: "Chopper se tornou o médico dos Piratas do Chapéu de Palha, ele é conhecido por sua personalidade ingênua e inocente. Apesar de sua aparência fofa, ele é um médico habilidoso e um membro importante da tripulação."
      },
      {
        img: imgZoro,
        nome: "Roronoa Zoro",
        descricao: "Zoro, que é conhecido como O Caçador de Piratas, é um pirata e ex-Caçador de Recompensas, e também um espadachim que usa 3 espadas. Ele foi o primeiro membro a se juntar aos Piratas do Chapéu de Palha, e até o momento, é considerado a maior ameaça e membro mais perigoso depois de Luffy e o imediato do bando."
      },
      {
        img: imgLuffy,
        nome: "Monkey D. Luffy",
        descricao: "Luffy é o fundador e o capitão do cada vez mais infame e poderoso Piratas do Chapéu de Palha, bem como um de seus quatro principais lutadores. Seu sonho de vida é se tornar o Rei dos Piratas, encontrando o lendário tesouro deixado pelo falecido Rei dos Piratas, Gol D. Roger."
      },
      {
        img: imgNami,
        nome: "Nami",
        descricao: "Nami, a 'Gata Ladra' (Nami Cat Burglar em inglês) é uma pirata e a navegadora dos Piratas do Chapéu de Palha. A primeira aparição de Nami foi no capítulo 8 do mangá de One Piece, publicado em 15 de Setembro de 1997. Nami foi o terceiro membro da tripulação e o segundo a entrar, fazendo-o durante o Arco Orange Town."
      },
      {
        img: imgSanji,
        nome: "Sanji",
        descricao: "Vinsmoke Sanji 'Perna Negra' é o pirata dos Chapéu de Palha. Ele é oficialmente o membro da tripulação e o quarto a entra, fazendo isso no fim do Arco Baratie. Desde que nasceu no Norte Azul, o primeiro Chapéu de Palha não é original do Leste Azul."
      },
    ];
    const imagensTripulacao = [imgChopperPng, imgZoroPng, imgLuffyPng, imgNamiPng, imgSanjiPng];
  
    const [personagemSelecionado, setPersonagemSelecionado] = useState(2);
  
    const handleButtonClick = (indice) => {
      setPersonagemSelecionado(indice);
    };
  
    return (
      <div className="corpo">
        <main className="personagens">
          {personagens.map((personagem, indice) => (
            <div key={indice} className={`personagem ${indice === personagemSelecionado ? 'selecionado' : ''}`}>
              <img className="imagem" src={personagem.img} alt={`Personagem ${personagem.nome}`} />
              <div className="conteudo">
                <i className="logo"></i>
                <h2 className="nome-personagem">{personagem.nome}</h2>
                <p className="descricao">{personagem.descricao}</p>
              </div>
            </div>
          ))}
        </main>
        <ul className="botoes">
          {personagens.map((personagem, indice) => (
            <li key={indice}>
              <button
                className={`botao ${indice === personagemSelecionado ? 'selecionado' : ''}`}
                onClick={() => handleButtonClick(indice)}
              >
                <img src={imagensTripulacao[indice]} alt={`Tripulação ${personagem.nome}`} />
            
                
              </button>
              
             
            </li>
          ))}
          
        </ul>
      </div>
    );
  }
  
  export default App;