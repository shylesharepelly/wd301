import React from "react";
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
}
interface TaskItem {
  todoTitle: string;
  todoDescription: string;
  todoDueDate: string;
}
interface State {}
class TaskList extends React.Component<Props, State> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task
        key={idx}
        todoTitle={task.todoTitle}
        todoDueDate={task.todoDueDate}
        todoDescription={task.todoDescription}
      />
    ));
  }
}
export default TaskList;
