import React from 'react';
import {Route, Switch}  from "react-router";
import './App.css';
import {Home} from "./pages/Home";
import {LeftBar} from "./components/LeftBar";

function InitialRouter() {
  return (
      <>
        <LeftBar/>
        <Switch>
            <Route path={'/'} component={Home}/>
        </Switch>
      </>
  );
}

export default InitialRouter;
