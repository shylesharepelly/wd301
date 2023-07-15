import { API_ENDPOINT } from '../../config/constants';


export const fetchComments = async (dispatch: any , projectID:string ,taskID:string ) => {
  const token = localStorage.getItem("authToken") ?? "";
  
  try {
    dispatch({ type: "FETCH_COMMENTS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: data });
  } catch (error) {
    console.log('Error fetching projects:', error);
    dispatch({ type: "FETCH_COMMENTS_FAILURE", payload: 'Unable to load comments' });
  }
};

export const addComment = async (dispatch: any,projectID:string,taskID:string, comment:string) => {
    try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
        // Next, I'll pass the `args` here
        body: JSON.stringify({description:comment}), 
      });
      if (!response.ok) {
        throw new Error('Failed to create comment');
      }
      const data = await response.json();
      if (data.errors && data.errors.length > 0) {
        return { ok: false, error: data.errors[0].message }
      }
  
      dispatch({ type: 'ADD_COMMENT_SUCCESS', payload: data });

      fetchComments(dispatch,projectID,taskID)

      return { ok: true }
      
    } catch (error) {
      console.error('Operation failed:', error);
      return { ok: false, error }
    }
  };