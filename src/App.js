import React from "react";
import "./App.css";
import TopNavbar from "./Components/Navbar/navbar";
import MainScreen from "./Components/MainScreen/MainScreen";
import Welcome from "./Components/Welcome/Welcome";
import DefineTable from "./Components/Defination/DefineTable";
import About from "./Components/About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />

      <Switch>
        <Route exact path={"/welcome"} component={Welcome} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/anasayfa"} component={MainScreen} />
        <Route exact path={"/masa-tanimla"} component={DefineTable} />
      </Switch>
    </BrowserRouter>
  );
}

export default (App);
