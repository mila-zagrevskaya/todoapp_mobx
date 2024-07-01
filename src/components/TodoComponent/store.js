import { observable, action, decorate } from 'mobx';

class Store {
  tasks = [];

  setTaskItems = (value) => {
    const task = {
      text: value,
      isEditable: false,
    };
    if (value.length) this.tasks.push(task);
  };

  deleteTask = (id) => {
    this.tasks.splice(id, 1);
  };

  displayEditTask = (id) => {
    this.tasks[id].isEditable = !this.tasks[id].isEditable;
  };

  editTask = (id, value) => {
    const newTask = {
      text: value,
      isEditable: false,
    };
    if (value.length > 0) this.tasks.splice(id, 1, newTask);
    this.tasks[id].isEditable = false;
  };
}

decorate(Store, {
  tasks: observable,
  setTaskItems: action,
  deleteTask: action,
  editTask: action,
});

export const TodoStore = new Store();
