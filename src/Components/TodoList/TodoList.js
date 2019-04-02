import React, { Component } from "react";
import TodoItems from "../TodoItems/TodoItems";
import "../TodoList/TodoList.css";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      addedItem: "",
      category: "",
      toggle: false
    };

    this.addItem = this.addItem.bind(this);
    this.getItem = this.getItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.getItem();
  }

  getItem() {
    axios.get("/api/todos").then(res => {
      console.log(res);
      this.setState({
        items: res.data
      });
    });
  }

  addItem(e) {
    e.preventDefault();
    axios
      .post("/api/todos", {
        todo: this.state.addedItem,
        category: this.state.category
      })
      .then(res => {
        this.setState({
          items: res.data,
          addedItem: "",
          category: ""
        });
      });
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      addedItem: e.target.value
    });
  }

  handleCategory(e) {
    console.log(e.target.value);
    this.setState({
      category: e.target.value
    });
  }

  deleteItem(id) {
    axios.delete(`/api/todos/${id}`).then(res => {
      console.log(res);
      this.setState({
        items: res.data
      });
    });
  }
  saveEdit = (val, id) => {
    // axios.put => val id
    axios.put(`/api/todos/${id}?todo=${val}`).then(res => {
      console.log(res);
      this.setState({
        newVal: res.data.id
      });
      this.getItem();
      this.toggle();
    });
  };

  toggle = id => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              onChange={e => this.handleChange(e)}
              placeholder="Enter Task"
            />
            <button type="submit">Add</button>
            <br />
            <input
              onChange={e => this.handleCategory(e)}
              placeholder="Enter Category"
            />
            {/* <button type="submit">Add</button> */}
          </form>
        </div>
        <TodoItems
          toggle={this.state.toggle}
          entries={this.state.items}
          deleteItem={this.deleteItem}
          editItem={this.toggle}
          saveEdit={this.saveEdit}
        />
      </div>
    );
  }
}

export default TodoList;
