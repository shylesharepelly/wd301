import React from "react";
import "./TaskCard.css";

interface TaskProp {
  todoTitle: string;
  todoDescription: string;
  todoDueDate: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.todoTitle}</h2>
        <p className="text-sm text-slate-500">{this.props.todoDueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {this.props.todoDescription}
        </p>
      </div>
    );
  }
}

export default Task;
