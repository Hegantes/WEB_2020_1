import React from 'react';

import {Hero, Enemy} from './components/Questao1';
import Arena from './components/Arena';
import World from './components/World';

import {Button, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <World>
        <Arena arena="Universo paralelo">
            <Hero nome="Wick" img="images/wick.jpg"/>
            <Enemy nome="Joker" img="images/joker.jpg"/>
        </Arena>

        <Button onClick={() => alert("Wick wins")}>Lutar</Button>

        <Arena arena="Konoha">
            <Hero nome="Naruto" img="images/naruto.png"/>
            <Enemy nome="Pain" img="images/pain.jpg"/>
        </Arena>

        <Button onClick={() => alert("Naruto com protagonismo ganha")}>Lutar</Button>
        
        <Arena arena="Game of Thrones">
          <Hero nome="Jon Snow" img="images/jon-snow.jpg"/>
          <Enemy nome="Rei da noite" img="images/rei-noite.jpg"/>
        </Arena>

        <Button onClick={() => alert("Rei da noite ganha e o que aconteceu na serie foi puro poder do roteiro")}>Lutar</Button>

      </World> 
    </div>
    
  );
}

export default App;
