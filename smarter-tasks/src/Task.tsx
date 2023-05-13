import React from "react";
import "./TaskCard.css";
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

interface TaskItem {
  id: number;
  todoTitle: string;
  todoDescription: string;
  todoDueDate: string;
  removeTask: (tid: number) => void;
}

const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100 flex justify-between">
      
      <li>
        <div>
        <Link to={`/tasks/${props.id}`}>
            <h2 className="text-base font-bold my-1">{props.todoTitle}</h2>
        </Link>
        </div>
        <button
          className="deleteTaskButton"
          onClick={() => props.removeTask(props.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Task;
