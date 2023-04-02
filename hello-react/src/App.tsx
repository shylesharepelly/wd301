import React from "react";
import TaskCard from "./TaskCard";


interface due {
  title:string,
  dueDate:string,
  assigneeName:string
}

interface done {
  title:string,
  completedAtDate:string,
  assigneeName:string
}


function App() {

  let Pending1 : due ={title:"Build the website with static content" ,dueDate:"10th April", assigneeName:"Rohith S"}
  let Pending2 : due ={title:"Add a blog", dueDate:"22nd March", assigneeName:"Rohith M"}

  let completed1 : done = {title:"Design the mockup", completedAtDate:"10th April", assigneeName:"Rohith M"}
  let completed2 : done = {title:"Get the approval from principal", completedAtDate:"20th April" ,assigneeName:"Ajay S"}
 
  return (
    <div>
      
      <div className="grid grid-cols-6">
              <div className="col-start-2 col-span-4">
                  <h6 className="py-2 text-4xl font-bold">Smarter Tasks</h6>
                  <h6 className="py-1 text-xl mb-4 ">Project: Graduation Final Year Project (Revamp College Website)</h6>
              </div>
              <div className="col-start-2  col-span-2 border border-gray-900 rounded-lg mr-2">
                  <h6 className="py-2 text-2xl px-5 text-center font-bold">Pending</h6>
                  <div className="py-2 px-5 border border-gray-900 m-3">
                    <TaskCard { ...Pending1}/>
                  </div>
                  <div className="py-2  px-5 border border-gray-900 m-3">
                    <TaskCard { ...Pending2}/>
                  </div>
                  <div className="py-2 px-5 bg-gray-300 border border-gray-900 m-3">
                    <p>+ New Task</p>
                  </div>
              </div>

              <div className="col-start-4 col-span-2 border border-gray-900 rounded-lg ml-2">
                  <h6 className="py-2 text-2xl px-5 text-center font-bold">Done</h6>
                  <div className="py-2 px-5 border border-gray-900 m-3">
                    <TaskCard {...completed1}/>
                  </div>
                  <div className="py-2 px-5 border border-gray-900 m-3">
                    <TaskCard {...completed2}/>
                  </div>
              </div>             
        </div>
    </div>
  );
}

export default App;
