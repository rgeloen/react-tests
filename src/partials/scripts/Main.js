import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from "./Home"
import TodoList from "./TodoList"
import IpAdress from "./IPAddressContainer"


class Main extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <h1> Hello world </h1>
          <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todoList">TodoList</Link></li>
            <li><Link to="/ipaddressContainer" >IpAdress</Link></li>
          </ul>
          <div className="content">
           <Route exact path="/" component={Home}></Route>
           <Route path="/todoList" component={TodoList}></Route>
           <Route path="/ipaddressContainer" component={IpAdress}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
