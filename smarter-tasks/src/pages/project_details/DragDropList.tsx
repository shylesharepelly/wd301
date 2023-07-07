import React from "react";
import { ProjectData } from "../../context/task/types";
import Column from "./Column";

const Container = (props: React.PropsWithChildren) => {
  return <div className="flex">{props.children}</div>;
};

const DragDropList = (props: { data: ProjectData }) => {
    return (
      <Container>
        {props.data.columnOrder.map((colID) => {
          const column = props.data.columns[colID];
          const tasks = column.taskIDs.map((taskID) => props.data.tasks[taskID]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    );
  };
  
  export default DragDropList;