import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";
const Task = (props:TaskItem) =>{
  return (
    <div className="TaskItem shadow-md border border-slate-100 flex justify-between">
      <li>
      <h2 className="text-base font-bold my-1">{props.todoTitle}</h2>
      <p className="text-sm text-slate-500">{props.todoDueDate}</p>
      <p className="text-sm text-slate-500">
        Description: {props.todoDescription}
      </p>
      
      </li>
    </div>
  );
}

export default Task;
