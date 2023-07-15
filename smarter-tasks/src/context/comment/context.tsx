
import React, { createContext, useContext, useReducer } from "react";

import { reducer, initialState, CommentsActions } from "./reducer";
import {CommentsState} from "./types"

const CommentsStateContext = createContext<CommentsState >(initialState);
type CommentsDispatch = React.Dispatch<CommentsActions>;

const CommentsDispatchContext = createContext<CommentsDispatch | undefined>(undefined);
export const CommentsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

export const useCommentsState = () => useContext(CommentsStateContext);

export const useCommentsDispatch = () => useContext(CommentsDispatchContext);