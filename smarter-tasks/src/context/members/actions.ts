import { API_ENDPOINT } from '../../config/constants';
export const fetchMembers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  
  try {
    dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });
  } catch (error) {
    console.log('Error fetching members:', error);
    dispatch({ type: "FETCH_MEMBERS_FAILURE", payload: 'Unable to load users' });
  }
};

export const addUser = async (dispatch: any, args: any) => {
    try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
  
        // Next, I'll pass the `args` here
        body: JSON.stringify(args), 
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      const data = await response.json();
      if (data.errors && data.errors.length > 0) {
        return { ok: false, error: data.errors[0].message }
      }
  
      dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: data });
  
      return { ok: true }
    } catch (error) {
      console.error('Operation failed:', error);
      return { ok: false, error }
    }
  };

  export const deleteUser = async (dispatch: any, id:number) => {
    try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
  
        // Next, I'll pass the `args` here
        body: JSON.stringify(id), 
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      const data = await response.json();
      if (data.errors && data.errors.length > 0) {
        return { ok: false, error: data.errors[0].message }
      }
  
      dispatch({ type: 'DELETE_MEMBER_SUCCESS', payload: data });
  
      return { ok: true }
    } catch (error) {
      console.error('Operation failed:', error);
      return { ok: false, error }
    }
  };