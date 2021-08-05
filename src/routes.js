import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import lancamentos from './components/lancamentos';
import localizar from './components/LocalizarLançamentos/localizar';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>  
              <Route path="/" exact component={lancamentos}/>
              <Route path="/localizar" component={localizar}/>
          </Switch>
        </BrowserRouter>
    );
   
 }