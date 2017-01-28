import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Saludo from './components/saludo';
import Counter from './components/counter';
import Cronometro from './components/cronometro';
import Buscador from './components/buscador';
import Ecommerce from './components/ecommerce';

import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Ecommerce />
    </Provider>,
    document.getElementById('app'));