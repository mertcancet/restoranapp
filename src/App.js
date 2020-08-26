import React from "react";
import "./App.css";
import TopNavbar from "./Components/Navbar/navbar";
import MainScreen from "./Pages/MainScreen/MainScreen";
import Welcome from "./Pages/Welcome/Welcome";
import About from "./Pages/About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />

      <Switch>
        <Route path={"/welcome"} component={Welcome} />
        <Route path={"/about"} component={About} />
        <Route path={"/anasayfa"} component={MainScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
