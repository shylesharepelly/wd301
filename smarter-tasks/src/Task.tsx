import React from "react";
import "./TaskCard.css";


interface TaskItem {
  todoTitle: string;
  todoDescription: string;
  todoDueDate: string;
  removeTask:(title:string) => void;
  
}


const Task = (props:TaskItem) =>{
  return (
    <div className="TaskItem shadow-md border border-slate-100 flex justify-between">
      <li>
      <h2 className="text-base font-bold my-1">{props.todoTitle}</h2>
      <p className="text-sm text-slate-500">{props.todoDueDate}</p>
      <p className="text-sm text-slate-500">
        Description: {props.todoDescription}
      </p>
      <button className="deleteTaskButton" onClick={()=>props.removeTask(props.todoTitle)}>
            Delete
      </button>
      
      </li>
    </div>
  );
}

export default Task;
