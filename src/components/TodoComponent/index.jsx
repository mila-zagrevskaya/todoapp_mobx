/* eslint-disable react/prop-types */
import React from 'react';
import { observer, inject } from 'mobx-react';

import Counter from 'components/Counter';
import TaskList from './TodoList';


import './style.scss';

@inject('TodoStore')
@observer
class TodoComponent extends React.Component {
  state = {
    taskValue: '',
  };

  inputChange = (event) => {
    this.setState({
      taskValue: event.target.value,
    });
  };

  addNewTask = () => {
    const { setTaskItems } = this.props.TodoStore;
    setTaskItems(this.state.taskValue);
    this.setState({
      taskValue: '',
    });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') this.addNewTask();
  };

  submit = (event) => {
    event.preventDefault();
    this.addNewTask();
  };

  render() {
    return (
      <div className="wrapper">
        <Counter tasks = {this.props.TodoStore.tasks} />
        <div className="add-new-task">
          <input
            className="input"
            placeholder="Add task"
            type="text"
            value={this.state.taskValue}
            onChange={this.inputChange}
            onKeyPress={this.handleKeyPress}
          />

          <button className="add-task-button" onClick={this.submit}>
            Add Task
          </button>
        </div>
        <div className="tasks">{this.props.TodoStore.tasks.length > 0 && <TaskList />}</div>
      </div>
    );
  }
}

export default TodoComponent;
