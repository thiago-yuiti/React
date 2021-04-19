import React from 'react';
import CardMusica from '../components/CardMusica';
import NavBar from '../components/NavBar';

function MinhasMusicas(){
    return (
        <>
      <NavBar ></NavBar>
    <div className="container">  
        <div className="filter">    
            <button className="btn-green right">Adicionar</button>
        </div>            
    </div>
    <div className="container">
        <div className="music-boxes">
            <CardMusica 
            nome="Something Just Like This"
            genero = "Pop"
            ano = "2017"
            />
            <CardMusica 
            nome="Paradise"
            genero = "Pop"
            ano = "2012"
            />
            <CardMusica 
            nome="Genjyou Destruction"
            genero = "JPop"
            ano = "2015"
            />
            <CardMusica 
            nome="Sign"
            genero = "JPop"
            ano = "2009"
            />
        </div>

    </div>

        </>
    );
}


export default MinhasMusicas;

