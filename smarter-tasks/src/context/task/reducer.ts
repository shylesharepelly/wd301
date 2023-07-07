import { Reducer } from "react";
import projectData from "./initialData";
import { TaskListAvailableAction, TaskListState, TaskActions } from "./types";
// Define the initial state
export const initialState: TaskListState = {
    projectData: projectData,
    isLoading: false,
    isError: false,
    errorMessage: "",
  };
export const taskReducer: Reducer<TaskListState, TaskActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    // Toggle the `isLoading` to true when request is initiated.
    case TaskListAvailableAction.CREATE_TASK_REQUEST:
      return { ...state, isLoading: true };

    // Toggle the `isLoading` to false when request is succesfull or errored.
    case TaskListAvailableAction.CREATE_TASK_SUCCESS:
      return { ...state, isLoading: false };
    case TaskListAvailableAction.CREATE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case TaskListAvailableAction.REORDER_TASKS:
    return { ...state, isLoading: false, projectData: action.payload };
    default:
      return state;
  }
};