import React from 'react';
import {Card} from 'react-bootstrap';
import Qtd2 from '../Questao2/Qtd2';

export default() =>{

    return(
    <div>
        <Card>
            <Qtd2 nome = 'Natan' curso = 'ES' cidade = 'SP'/>
        </Card>
    </div>
    )
}