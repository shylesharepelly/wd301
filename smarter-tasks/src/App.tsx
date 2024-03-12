import { RouterProvider } from "react-router-dom";
import React, { useContext } from "react";
import "./App.css";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { MembersProvider } from "./context/members/context";
import { ProjectsProvider } from "./context/projects/context";
import "./i18n";

const App = () => {
  const currentTheme = useContext(ThemeContext);
  return (
    <div
      className={`h-full w-full mx-auto py-2 ${
        currentTheme.theme === "dark" ? "dark" : ""
      }`}
    >
      <ProjectsProvider>
        <MembersProvider>
          <RouterProvider router={router} />
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
};
export default App;
