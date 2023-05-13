import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import { TaskItem } from "./types";

interface TaskDetailsPageParams extends Record<string, string> {
  id: string;
}

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<TaskDetailsPageParams>();
  const [taskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );
  
  const task = taskAppState.tasks.find(task => task.id === Number(id));

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{task?.todoTitle}</h3>
      </div>
      <p className="text-gray-600">{task?.todoDescription}</p>
      <p className="text-gray-600">{task?.todoDueDate}</p>
    </div>
  );
};

export default TaskDetailsPage;