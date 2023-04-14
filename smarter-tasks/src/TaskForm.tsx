import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    title: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    
addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title
    }
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };
    inputRef = React.createRef<HTMLInputElement>();
    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ title: event.target.value });
      };
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: ""
        }
    }
    render(){
        return (
          <form onSubmit={this.addTask}>
            <input type="text" value={this.state.title} onChange={this.titleChanged}/>
            <button type="submit">Add item</button>
          </form>
        )
      }
}
 export default TaskForm;