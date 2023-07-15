import React from "react";
import { fetchComments  , addComment} from "../../context/comment/actions";
import { useCommentsDispatch } from "../../context/comment/context";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { CommentsPayload } from "../../context/comment/types";
import CommentList from "./CommentList";


const NewComment = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<CommentsPayload>({});

    const { projectID , taskID } = useParams();
    const commentDispatch = useCommentsDispatch();
    const onSubmit: SubmitHandler<CommentsPayload> = async (data) => {
        console.log("comment",data.description)
        try{
            await addComment(commentDispatch,projectID ?? "",taskID ?? "",data.description)
        }
        catch(error){
            console.log("could not add comment:",error);
        }
    }

        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                    type="text"
                    required
                    placeholder="add comment to this task"
                    id="commentBox"
                    {...register("description", { required: true })}
                    className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                    />
                    <button
                    type="submit"
                    id='addCommentBtn'
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                    Add Comment
                    </button>
                </form>
                
            </div>
        )
    
}

export default NewComment;