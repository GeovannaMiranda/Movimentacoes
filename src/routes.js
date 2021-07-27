import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import lancamentos from './components/lancamentos';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>  
              <Route path="/" exact component={lancamentos}/>
          </Switch>
        </BrowserRouter>
    );
   
 }