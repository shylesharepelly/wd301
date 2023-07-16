interface Project {
  id: number;
  name: string;
}

export interface ProjectsState {
  projects: Project[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const initialState: ProjectsState = {
  projects: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

// interface Action {
//   type: string;
//   payload?: any;
// }

export type ProjectsActions =
  | { type: "FETCH_PROJECTS_REQUEST" }
  | { type: "FETCH_PROJECTS_SUCCESS"; payload: Project[] }
  | { type: "FETCH_PROJECTS_FAILURE"; payload: string }
  | { type: "ADD_PROJECT_SUCCESS"; payload: Project };

export const reducer = (
  state: ProjectsState = initialState,
  action: ProjectsActions
): ProjectsState => {
  switch (action.type) {
    case "FETCH_PROJECTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_PROJECT_SUCCESS":
      return { ...state, projects: [...state.projects, action.payload] };

    case "FETCH_PROJECTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        projects: action.payload,
      };
    case "FETCH_PROJECTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
