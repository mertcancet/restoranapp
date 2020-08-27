import React from "react";
import "./App.css";
import TopNavbar from "./Components/Navbar/navbar";
import MainScreen from "./Components/MainScreen/MainScreen";
import Welcome from "./Components/Welcome/Welcome";
import DefineTable from "./Components/Defination/DefineTable/DefineTable";
import About from "./Components/About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />

      <Switch>
        <Route path={"/welcome"} component={Welcome} />
        <Route path={"/about"} component={About} />
        <Route exact path={"/anasayfa"} component={MainScreen} />
        <Route path={"/masa-tanimla"} component={DefineTable} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
