import TaskCard from "./TaskCard";


function App() {
 
  return (
    <div>
      
      <div class="grid grid-cols-6">
              <div class="col-start-2 col-span-4">
                  <h6 class="py-2 text-4xl font-bold">Smarter Tasks</h6>
                  <h6 class="py-1 text-xl mb-4 ">Project: Graduation Final Year Project (Revamp College Website)</h6>
              </div>
              <div class="col-start-2  col-span-2 border border-gray-900 rounded-lg mr-2">
                  <h6 class="py-2 text-2xl px-5 text-center font-bold">Pending</h6>
                  <div class="py-2 px-5 border border-gray-900 m-3">
                    <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohith S"/>
                  </div>
                  <div class="py-2  px-5 border border-gray-900 m-3">
                    <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohith M"/>
                  </div>
                  <div class="py-2 px-5 bg-gray-300 border border-gray-900 m-3">
                    <p>+ New Task</p>
                  </div>
              </div>

              <div class="col-start-4 col-span-2 border border-gray-900 rounded-lg ml-2">
                  <h6 class="py-2 text-2xl px-5 text-center font-bold">Done</h6>
                  <div class="py-2 px-5 border border-gray-900 m-3">
                    <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohith M"/>
                  </div>
                  <div class="py-2 px-5 border border-gray-900 m-3">
                    <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S"/>
                  </div>
              </div>             
        </div>
    </div>
  );
}

export default App;
