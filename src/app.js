import React from 'react';
import ReactDOM from 'react-dom';
import Saludo from './components/Saludo'

ReactDOM.render(
    <Saludo
        text={'Hola'}
        user={{name: 'Jesus', lastname: 'Gómez'}}
        />,
    document.getElementById('app'));