import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Depesas from './pages/Despesas';
import NewDepesa from './pages/NewDespesa';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/despesas" component={Depesas} />
                <Route path="/newdespesa" component={NewDepesa} />
            </Switch>
        </BrowserRouter>
    );
}