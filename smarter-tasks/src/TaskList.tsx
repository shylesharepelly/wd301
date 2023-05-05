import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  removeTask: (title: string) => void;
}


const TaskList= (props: Props) => {
  const list =  props.tasks.map((task, idx) => (
    <Task
      key={idx}
      todoTitle={task.todoTitle}
      todoDescription={task.todoDescription}
      todoDueDate={task.todoDueDate}
      removeTask={props.removeTask}
    />
  ));
  return <>{list}</>;
};
export default TaskList;
