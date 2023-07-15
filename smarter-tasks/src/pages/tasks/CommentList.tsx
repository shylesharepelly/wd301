import React from "react";
import { fetchComments } from "../../context/comment/actions";
import { useCommentsDispatch, useCommentsState } from "../../context/comment/context";
import NewComment from "./NewComment";

import { useMembersState  , useMembersDispatch} from "../../context/members/context";

const CommentList = () =>{
    const commentState  = useCommentsState()
    const memberState = useMembersState();

  const { comments, isLoading, isError, errorMessage } = commentState
 

  const getUserName = (userid : any) => {
    const username = memberState?.members?.filter(
      (member) => member.id === userid
    )?.[0];
    return username?.name;
  }

  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  
  if (isError) {
    return <span>{errorMessage}</span>;
  } 

  // Helper function to format the date to YYYY-MM-DD format
const formatDateForPicker = (isoDate: string) => {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
  // Format the date as per the required format for the date picker (YYYY-MM-DD)
  return `${year}-${month}-${day}`;
};


return (
    <>
    <h1 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">comments:</h1>
    {comments.map((comment) => (
        <div key={comment.createdAt} className="comment flex justify-between">
           <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">{getUserName(comment.owner)}</h5>
        <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">{formatDateForPicker(comment.createdAt)}</h5>
        <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">{comment.description}</h5>
        </div>
       
    ))} 
       
  </>
)


}

export default CommentList;