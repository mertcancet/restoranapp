import React from "react";
import "./App.css";
import TopNavbar from "./Components/Navbar/navbar";
import MainScreen from "./Components/MainScreen/MainScreen";
import Welcome from "./Components/Welcome/Welcome";
import DefineTable from "./Components/Defination/DefineTable/DefineTable"
import CategoriesProductDefination from "./Components/Defination/CategoriesProductDefination/CategoriesProductDefination";
import About from "./Components/About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />

      <Switch>
        <Route exact path={"/"} component={MainScreen} />
        <Route path={"/welcome"} component={Welcome} />
        <Route path={"/about"} component={About} />
        <Route path={"/masa-tanimla"} component={DefineTable} />
        <Route path={"/urun-tanimla"} component={CategoriesProductDefination} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
