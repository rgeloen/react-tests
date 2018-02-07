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
          <div className="header">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/todoList">TodoList</Link></span>
            <span><Link to="/ipaddressContainer" >IpAdress</Link></span>
          </div>
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
