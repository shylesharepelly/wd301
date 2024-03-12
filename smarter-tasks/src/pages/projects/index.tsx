// import ProjectList from "./ProjectList";
// import NewProject from "./NewProject";

import React, { Suspense } from "react";

import { useTranslation } from "react-i18next";

const ProjectList = React.lazy(() => import("./ProjectList"));
import NewProject from "./NewProject";
import ErrorBoundary from "../../components/ErrorBoundary";

// const Projects = () => {
//   return (
//     <>
//       <div className="flex justify-between">
//         <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
//         <NewProject />
//       </div>
//       <ProjectList />
//     </>
//   );
// };

const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          {t("Projects")}
        </h2>
        <NewProject />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">{t("Loading...")}</div>}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Projects;
