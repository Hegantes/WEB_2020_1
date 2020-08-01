import React from 'react';

    function Hero(props){
        return(
            <div>
                <h1>{props.nome} {props.arena}</h1>
                <img src={props.img}/>
            </div>
        );
    }

    function Enemy(props){
        return(
            <div>
                <h1>{props.nome} {props.arena}</h1>
                <img src={props.img}/>
            </div>
        );
    } 

    export{Hero, Enemy};