import React from "react";
import { Icon } from '@iconify/react';
import { useMembersState  , useMembersDispatch} from "../../context/members/context";
import { deleteUser } from "../../context/members/actions";

export default function MemberListItems() {

  let state: any = useMembersState();
  const dispatchMembers = useMembersDispatch();


  const { members, isLoading, isError, errorMessage } = state
  //console.log(members);
 //for loading all users
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  //for deleting the  user with id
  const deleteHandler =async (id : number) => {
    console.log(id);
    const response =await deleteUser(dispatchMembers,id);
    console.log(response);

  };

  return (
    <>
      {members.map((member: any) => (
        <div key={member.id} className="block member p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
          <button onClick={()=> { deleteHandler(member.id) }}>
          <Icon icon="heroicons-outline:trash" />
          </button>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.email}</h5>
        </div>
      ))}        
    </>
  );
}