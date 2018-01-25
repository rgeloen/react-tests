import React, { Component } from 'react';
import FlipMove from 'react-flip-move';


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
export default TodoItems;
