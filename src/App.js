import React from 'react';
import ReactDOM from 'react-dom';
import './partials/App.css';
import TodoList from './partials/scripts/TodoList.js';

const container = document.querySelector("#container");

ReactDOM.render(
    <TodoList/>,
    container
);
