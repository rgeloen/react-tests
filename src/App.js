import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlipMove from 'react-flip-move';
import './partials/App.css';

const container = document.querySelector("#container");


class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) { // delete event handler (not delete method)
    this.props.delete(key);
  }

  createTasks(item) { // adding item to the array items
    return <li onClick={() => this.delete(item.key)}
      key={item.key}>{item.text}</li> // event handling for delete item & key attribute for knowing which item from "items"
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks); // array of li elements containing the appropriate content to print

    return (
      // list of item containing the array of li DOM elements
      <ul className="List">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};


class TodoList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        items: []
      };

    this.addItem = this.addItem.bind(this); // making this method working on functions like "addItem()"
    this.deleteItem = this.deleteItem.bind(this); // all references to "this" inside deleteItem will reference the correct thing
  }

  addItem(e) { // add item component in items array
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.push({ // add item array element to beginning of items array if input has text, and return items length
        text: this._inputElement.value, //input value of form (thx to ref, i can access to input value)
        key: Date.now()
    });

    this.setState({
      items: itemArray
    });

    this._inputElement.value = ""; // default value recalls after the process is done
  }

  console.log(itemArray);

  e.preventDefault(); // By default, when you submit a form, the page reloads and clears everything out. We don't want that.
  }

  deleteItem(key) { // delete items functions
    var filteredItems = this.state.items.filter(function (item) { // creation of a new array from items
    return (item.key !== key); // new array filters all the items and delete the item to delete with the right key
  });

    this.setState({
      items: filteredItems // items is now our filtered array on our state object
    });
  }

  render() {
    return (
      <div className="card-form">
        <div className="header-form">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task"></input>
            <button type="submit">add</button>
          </form>
        </div>
         <TodoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}

ReactDOM.render(
    <TodoList/>,
    container
);
