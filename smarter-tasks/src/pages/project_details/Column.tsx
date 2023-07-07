import React from "react";

import { ColumnData, TaskDetails } from "../../context/task/types";
import Task from "./Task";
const Container = (props: React.PropsWithChildren) => {
  // We will use flex to display lists as columns
  return (
    <div className="m-2 border border-gray rounded w-1/3 flex flex-col">
      {props.children}
    </div>
  );
};

// A component to render the title, which will be included as <Title>This is a sample title</Title>
const Title = (props: React.PropsWithChildren) => {
  return <h3 className="p-2 font-semibold">{props.children}</h3>;
};

const TaskList = (props: React.PropsWithChildren) => {
  return <div className="grow min-h-100"> {props.children}</div>;
};

interface Props {
  column: ColumnData;
  tasks: TaskDetails[];
}

const Column: React.FC<Props> = (props) => {
  // Render each `Task` within a `TaskList` component.
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <TaskList>
        {props.tasks.map((task) => (
          <Task key={task.id} task={task}  />
        ))}
      </TaskList>
    </Container>
  );
};

export default Column;