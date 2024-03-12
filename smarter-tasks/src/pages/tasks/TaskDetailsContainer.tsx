import React from "react";
import { useProjectsState } from "../../context/projects/context";
import { useTasksState } from "../../context/task/context";
import TaskDetails from "./TaskDetails";
import { useParams } from "react-router-dom";
import { CommentsProvider } from "../../context/comment/context";
import { useTranslation } from "react-i18next";

const TaskDetailsContainer = () => {
  let { taskID } = useParams();
  const { t } = useTranslation();
  const projectState = useProjectsState();
  const taskListState = useTasksState();
  const isFetchingTasks = taskListState.isLoading;
  const selectedTask = taskListState.projectData.tasks?.[taskID || ""];
  // We will render a loader based on the status,
  // We make sure, the tasks have been fetched, project is a valid one.
  if (isFetchingTasks || !projectState || projectState?.isLoading) {
    return <>{t("Loading...")}</>;
  }
  if (!selectedTask) {
    return <>No such task!</>;
  }

  return (
    <CommentsProvider>
      <TaskDetails />
    </CommentsProvider>
  );
};

export default TaskDetailsContainer;
