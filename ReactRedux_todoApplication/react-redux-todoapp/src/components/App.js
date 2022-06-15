import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store";
class App extends Component {
  state = {
    title: " enter the value here",
  };

  handleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  deleteTodo = ({ target }) => {
    let id = Number(target.id);
    this.props.dispatch({
      type: "deleteTodo",
      index: id,
    });
    
    this.setState({
      title: "",
    });
  };

  createTodo = () => {
    this.props.dispatch({
      type: "addtodo",
      value: this.state.title,
    });

    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder=" enter a todo here "
          />
          <button onClick={this.createTodo}>create todo</button>
        </div>
        <ul>
          {this.props.todos.map((todo, index) => {
            return (
              <div className="todo" key={index}>
                <li> {todo.title}</li>
                <span id={index} onClick={this.deleteTodo}>
                  ❌
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

function getState(state) {
  return {
    todos: state.todos,
  };
}
export default connect(getState)(App);
