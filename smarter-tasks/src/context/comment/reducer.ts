type User={
id:number,
email:string,
name:string
}

interface Comment {
    id: number,
    description: string,
    createdAt:string,
    user:User,
    task_id:number
  }
  
  export interface CommentsState {
    comments: Comment[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }

  export const initialState: CommentsState = {
    comments: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
  };

export type CommentsPayload = Omit<Comment, "id" | "createdAt" | "user" | "task_id">;
 
export type CommentsActions = 
| { type: 'FETCH_COMMENTS_REQUEST' }
| { type: 'FETCH_COMMENTS_SUCCESS'; payload: Comment[] }
| { type: 'FETCH_COMMENTS_FAILURE'; payload: string }
| { type: 'ADD_COMMENT_SUCCESS'; payload: Comment }

export const reducer = (state: CommentsState  = initialState, action: CommentsActions): CommentsState => {
switch (action.type) {
  case "FETCH_COMMENTS_REQUEST":
    return {
      ...state,
      isLoading: true
    };   
    case 'ADD_COMMENT_SUCCESS':
      return { ...state, comments: [...state.comments, action.payload] };  
    
  case "FETCH_COMMENTS_SUCCESS":
    return {
      ...state,
      isLoading: false,
      comments: action.payload,
    };      
  case "FETCH_COMMENTS_FAILURE":
    return {
      ...state,
      isLoading: false,
      isError: true, 
      errorMessage: action.payload
    };           
  default:
    return state;
}
}