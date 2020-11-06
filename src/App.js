import './App.css';
import NavBar from "./components/Navbar/NavBar";
import Container from "./components/Container/Container";
import React from "react";
import {Route,Switch,BrowserRouter} from "react-router-dom";
import Search from "./components/NavForSearch/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/:typeRoute' component={Search} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
