import NewMember from "./NewMember";
// import MemberList from "./MemberList";

import React, { Suspense } from "react";
const MemberList = React.lazy(() => import("./MemberList"));
import ErrorBoundary from "../../components/ErrorBoundary";

const Members = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Users</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
      <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
      <MemberList />
      </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Members;
