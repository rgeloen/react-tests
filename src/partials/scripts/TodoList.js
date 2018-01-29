import React, { Component } from 'react';
import TodoItems from './TodoItems.js';

class TodoList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        cards: []
      };

    this.addCard = this.addCard.bind(this); // making this method working on functions like "addItem()"
    this.deleteCard = this.deleteCard.bind(this); // all references to "this" inside deleteItem will reference the correct thing
  }

  addCard(e) { // add item component in items array
    var cardsArray = this.state.cards;

    if (this._inputElement.value !== "") {
      cardsArray.unshift({ // add item array element to beginning of items array if input has text, and return items length
        text: this._inputElement.value, //input value of form (thx to ref, i can access to input value)
        key: Date.now()
    });

    this.setState({
      cards: cardsArray
    });

    this._inputElement.value = ""; // default value recalls after the process is done
  }

    e.preventDefault(); // By default, when you submit a form, the page reloads and clears everything out. We don't want that.
  }

  deleteCard(key) { // delete items functions
    var filteredItems = this.state.cards.filter(function (card) { // creation of a new array from items
    return (card.key !== key); // new array filters all the items and delete the item to delete with the right key
  });

    this.setState({
      cards: filteredItems // items is now our filtered array on our state object
    });
  }

  render() {
    return (
      <div className="card-form">
        <div className="header-form">
          <form onSubmit={this.addCard}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task"></input>
            <button type="submit">add</button>
          </form>
        </div>
         <TodoItems entries={this.state.cards} delete={this.deleteCard}/>
      </div>
    );
  }
}

export default TodoList;
