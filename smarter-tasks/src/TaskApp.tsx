import React , {useEffect} from "react";
import { TaskItem } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

React.useState<TaskAppState>;


const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });
  

  React.useEffect(() => {
    const id = setTimeout(() => {
      console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
    }, 5000);
    return () => {
      console.log("clear or cancel any existing network call");
      clearTimeout(id);
    };
  }, [taskAppState.tasks]);

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  const removeTask=(title: string) =>{
    setTaskAppState({tasks: taskAppState.tasks.filter((task)=>
      task.todoTitle !== title),
    });
  
  }


  return (
    
      <div className="container py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl mb-2 font-bold text-slate-700">
          Smarter Tasks
        </h1>
        <h1 className="text-md mb-6 text-slate-600">
          <span className="font-bold">Project: </span>
          Graduation Final Year Project (Revamp college website)
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-xl p-4">
            <h1 className="text-slate-500 font-bold text-center mb-2">
              Pending
            </h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={taskAppState.tasks} removeTask={removeTask} />
          </div>
        </div>
      </div>
    );
   
};
export default TaskApp;
