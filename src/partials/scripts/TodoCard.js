import React, { Component } from 'react';

class TodoCard extends Component{
  constructor(props, context) {
    super(props, context);
    this.createTasks = this.createTasks.bind(this);

    render(){
      return(
        <div className="card-sheet">
          <h1 className="card-sheet-title">{}</h1>
        </div>
      )
    }
}
