
import { RouterProvider } from "react-router-dom";
import React, { useContext } from "react";
import "./App.css";
import router from "./routes"
import {ThemeContext }from "./context/theme";

import { ProjectsProvider } from "./context/projects/context";

const App = () => {
  const currentTheme = useContext(ThemeContext)
  return (
    <div  className={`h-full w-full mx-auto py-2 ${currentTheme.theme === "dark" ? "dark" : ""}`}>
         
           <ProjectsProvider>
           <RouterProvider router={router} />

           </ProjectsProvider>
    </div>
  );
}
export default App;