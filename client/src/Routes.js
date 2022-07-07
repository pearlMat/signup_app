import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
  
import App from './App';
import Info from './Info';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/signup" exact component={Info} />   
            </Switch>
        </BrowserRouter>
    );
};

export default AppRoutes;