import React from 'react';
import ReactDOM from 'react-dom';
import Qtd1 from './components/Questao1/Qtd1';
import Qtd2 from './components/Questao2/Qtd2';
import Qtd3 from './components/Questao3/Qtd3';
import Qtd4 from './components/Questao4/Qtd4';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

ReactDOM.render(
    <>
    <Qtd1/>
    <Qtd2/>
    <Qtd3/>
    <Qtd4/>
    </>
, root);