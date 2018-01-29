import React, { Component } from 'react';
import FlipMove from 'react-flip-move';


class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);
    this.createCards = this.createCards.bind(this);
  }

  delete(key) { // delete event handler (not delete method)
    this.props.delete(key);
  }

  createCards(card) { // adding item to the array items
    return <li onClick={() => this.delete(card.key)}
      key={card.key}> {card.title} <br/> Pour le : {card.date} </li> // NEED TO PUT DESC IN LI
      // event handling for delete item & key attribute for knowing which item from "items"
  }

  render() {
    var todoEntries = this.props.entries;
    var listCards = todoEntries.map(this.createCards); // array of li elements containing the appropriate content to print

    return (
      // list of item containing the array of li DOM elements
      <ul className="List">
        <FlipMove duration={250} easing="ease-out">
          {listCards}
        </FlipMove>
      </ul>
    );
  }
};
export default TodoItems;
