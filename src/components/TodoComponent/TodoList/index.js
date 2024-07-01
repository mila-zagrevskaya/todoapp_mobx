/* eslint-disable react/prop-types */
import React from 'react';

import { observer, inject } from 'mobx-react';

import 'assets/iconFonts.css';

@inject('TodoStore')
@observer
class Todolist extends React.Component {
  state = {
    newTaskValue: '',
  };

  inputChange = (event) => {
    this.setState({
      newTaskValue: event.target.value,
    });
  };

  render() {
    const { deleteTask, displayEditTask, editTask } = this.props.TodoStore;
    return (
      <ul className="tasks-list">
        {this.props.TodoStore.tasks.map((taskItem, index) => (
          <li key={index} className="task-list-items">
            {this.props.TodoStore.tasks[index].isEditable ? (
              <>
                <textarea
                  className="edit-field"
                  rows="15"
                  defaultValue={taskItem.text}
                  onChange={this.inputChange}></textarea>
                <span
                  className="icon-checkmark1"
                  onClick={() => editTask(index, this.state.newTaskValue)}></span>
              </>
            ) : (
              <>
                <span>{taskItem.text}</span>
                <span className="icon-pencil" onClick={() => displayEditTask(index)}></span>
                <span className="delete-task icon-bin" onClick={() => deleteTask(index)}></span>
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default Todolist;
