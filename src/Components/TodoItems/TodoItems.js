import React, { Component } from "react";
import "./TodoItems.css";
import TodoList from "../TodoList/TodoList";

// task
// 1) convert to stateful
// 2) toggle edit button true and false
// 3) changeHandler for input in TodoItems setState to newVal
// 3) saveEdit function with axios.put
// 4) setState with response
// 5 ) make sure all appropriate values are being passed to child

// state = {
// newVal: ''
// }

// changeHandler => setState({newVal})
// editItem => toggle
class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ""
    };
  }

  changeHandler = e => {
    this.setState({
      newVal: e.target.value
    });
  };

  render() {
    const todoEntries = this.props.entries.map(item => {
      return (
        <div className="todo-list" key={item.id}>
          <li>
            <div className="name-cat">
              <h1>{item.todo} </h1>
              <h3>{item.category} </h3>
            </div>
            <div>
              <button onClick={e => this.props.deleteItem(item.id)}>
                Delete
              </button>
              {this.props.toggle ? (
                <button
                  onClick={() =>
                    this.props.saveEdit(this.state.newVal, item.id)
                  }
                >
                  save edit
                </button>
              ) : (
                <button onClick={e => this.props.editItem(item.id)}>
                  edit
                </button>
              )}
              {this.props.toggle ? (
                <input
                  className="input-edit"
                  onChange={e => this.changeHandler(e)}
                />
              ) : null}
            </div>
          </li>
        </div>
      );
    });
    return <ul className="theList">{todoEntries}</ul>;
  }
}

//     return
//     let todoEntries = this.props.entries;
//     createTasks = item => {
//         return <li key={item.key}>{item.text}</li>;
//       };
// }
//     let listItems = todoEntries.map(this.createTasks);
//     return <ul className="thelist">{listItems}</ul>;

export default TodoItems;
