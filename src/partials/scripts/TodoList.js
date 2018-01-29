import React, { Component } from 'react';
import TodoItems from './TodoItems.js';

class TodoList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cards: [],
      title: '',
      date: '',
      description: ''
    };

    this.addCard = this.addCard.bind(this); // making this method working on functions like "addItem()"
    this.deleteCard = this.deleteCard.bind(this); // all references to "this" inside deleteItem will reference the correct thing
  }

  addCard(e) { // add item component in items array
    var cardsArray = this.state.cards;
    if (this._inputElement1.value !== "") {
      cardsArray.unshift({ // add item array element to beginning of items array if input has text, and return items length
        title: this._inputElement1.value, //input value of form (thx to ref, i can access to input value)
        date: this._inputElement2.value, //input value of form (thx to ref, i can access to input value)
        description: this._inputElement3.value, //input value of form (thx to ref, i can access to input value)
        key: Date.now()
      });
      this.setState({cards: cardsArray});
      this._inputElement1.value = ""; // default value recalls after the process is done  // NOT MAINTENABLE
      this._inputElement2.value = ""; // default value recalls after the process is done
      this._inputElement3.value = ""; // default value recalls after the process is done
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
            <input name="title" className="form-title" ref={(a) => this._inputElement1 = a} placeholder="Title" ></input>
            <input name="date" className="form-date" ref={(b) => this._inputElement2 = b} placeholder="Date" ></input>
            <textarea className="form-description" ref={(c) => this._inputElement3 = c} placeholder="Description"/>
            <button type="submit">add</button>
          </form>
        </div>
         <TodoItems entries={this.state.cards} delete={this.deleteCard}/>
      </div>
    );
  }
}

export default TodoList;
