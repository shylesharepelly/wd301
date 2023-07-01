import React from "react";

import { useMembersState } from "../../context/members/context";
export default function MemberListItems() {

  let state: any = useMembersState();

  const { members, isLoading, isError, errorMessage } = state
  //console.log(members);
 
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {members.map((member: any) => (
        <div key={member.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.email}</h5>
        </div>
      ))}        
    </>
  );
}