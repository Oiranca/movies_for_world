import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Search from "./components/NavForSearch/Search";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/:typeRoute" component={Search} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
