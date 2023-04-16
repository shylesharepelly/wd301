import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  todoTitle: string;
  todoDescription: string;
  todoDueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if(this.state.todoTitle.length>0  && this.state.todoDueDate.length){
      const newTask = {
        todoTitle: this.state.todoTitle,
        todoDescription: this.state.todoDescription,
        todoDueDate: this.state.todoDueDate,
      };
      this.props.addTask(newTask);
      this.setState({ todoTitle: "", todoDescription: "", todoDueDate: "" });
    }
    
    
  };
  inputRef = React.createRef<HTMLInputElement>();
  
  todoTitleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoTitle: event.target.value });
  };
  todoDescriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ todoDescription: event.target.value });
  };
  todoDueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ todoDueDate: event.target.value });
  };
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      todoTitle: "",
      todoDescription: "",
      todoDueDate: "",
    };
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <div >
          <h3>Title:</h3>
          <input
            type="text"
            value={this.state.todoTitle}
            id="todoTitle"
            onChange={this.todoTitleChanged}
            required
          />
          <h3>DueDate:</h3>
          <input
            type="text"
            value={this.state.todoDueDate}
            id="todoDueDate"
            onChange={this.todoDueDateChanged}
            required
          />
          <h3>Description:</h3>
          <input
            type="text"
            value={this.state.todoDescription}
            id="todoDescription"
            onChange={this.todoDescriptionChanged}
            required
          />
          <h3> </h3>
          <button type="submit" id="addTaskButton">addTaskButton</button>
        </div>
      </form>
    );
  }
}
export default TaskForm;
