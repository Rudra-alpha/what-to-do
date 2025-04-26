import { useEffect, useState } from "react";
import axios from "axios";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("task");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("task", JSON.stringify(tasks));
    }
  }, [tasks]);

  function AddTask() {
    if (task === "") {
      alert("Task is empty");
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function onChangeSetTask(e) {
    setTask(e.target.value);
  }
  return (
    <>
      {/* nav-start */}
      <nav className="w-full h-16 text-black sm:flex justify-between items-center px-5 hidden  ">
        <span className="h-full w-[50%] text-black font-bold text-3xl pl-16 flex items-center ">
          <h1 className="block text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:drop-shadow-2xl hover:scale-105 transition-all duration-300 transform">
            To-Do
          </h1>
        </span>
        <span className="h-full w-[50%] text-black font-medium flex justify-end items-center gap-15 pr-10 ">
          <h1
            className="transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 rounded py-2 px-3"
            onClick={() => alert("Your Already At Home 🎊🎉")}
          >
            <i className="fa-solid fa-house mr-3"></i>
            Home
          </h1>
          <h1 className="transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 rounded py-2 px-3">
            <i className="fa-solid fa-list-check mr-3"></i>
            <a href="#ToDoList"> Add Task</a>
          </h1>
          <h1 className="transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 rounded py-2 px-3">
            <i className="fa-solid fa-user mr-3"></i>
            login
          </h1>
        </span>
      </nav>
      {/* nav-end */}

      {/* main-start */}
      <main className="w-full">
        {/* image-start */}
        <div className="w-[80%]h-[40vh] md:w-[30%] md:h-auto flex flex-col justify-start items-center pl-3">
          <img
            img
            src="/mascott.png"
            alt="No Image Found"
            className="hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        {/* image-end */}
        {/* text-start */}
        <div className="w-full h-auto flex md:flex-row flex-col items-top md:justify-between md:pl-15 pl-5">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-300 transform hover:scale-105">
              Get Started
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-300 transform hover:scale-105">
              With Your
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-300 transform hover:scale-105">
              To-Do List
            </span>
          </h1>
          {/* To-Do List-start */}
          <div
            id="ToDoList"
            className="w-[95%] md:w-[60%] min-h-auto flex flex-col justify-center items-center mr-3 md:p-10 "
          >
            <div className="flex items-center gap-3">
              <img
                img
                src="/dont-wait.png"
                alt="To-Do Icon"
                className="h-30 w-30 object-contain" // Adjust size here if needed
              />
              <h1 className="py-2 text-2xl font-extrabold">Make The List</h1>
            </div>
            {/* add task bar start */}
            <div className="w-full h-[100%] flex flex-col items-center border-gray-300 border-[0.5px] rounded-2xl py-5">
              <div className="w-[90%] h-[7vh] border-[0.5px] border-gray-300 rounded-2xl overflow-hidden flex justify-between items-center hover:scale-103 transition-all duration-300 ease-inbutton ">
                <input
                  type="text"
                  placeholder="Add Your Task"
                  value={task}
                  onChange={onChangeSetTask}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      AddTask();
                    }
                  }}
                  className="w-[85%] h-full pl-4 border-none outline-none"
                />
                <button
                  onClick={AddTask}
                  className="w-[15%] h-full flex justify-center items-center bg-black"
                >
                  <i className="fa-solid fa-plus text-2xl text-white"></i>
                </button>
              </div>
              {/* tasks-start */}
              {tasks.map((element, index) => (
                <div className="w-[90%] h-[7vh] border-[0.5px] border-gray-300 rounded-2xl overflow-hidden flex justify-between items-center hover:scale-103 transition-all duration-300 ease-inbutton mt-3">
                  <input
                    type="text"
                    value={element}
                    readOnly
                    className="w-[85%] h-full pl-4 border-none outline-none"
                  />
                  <button
                    onClick={() => deleteTask(index)}
                    className="w-[15%] h-full flex justify-center items-center bg-black"
                  >
                    <i class="fa-solid fa-trash text-2xl text-white"></i>
                  </button>
                </div>
              ))}
              {/* tasks-end */}
            </div>
            {/* add task bar end */}
          </div>
          {/* To-Do List-end */}
        </div>
        {/* text-end */}
      </main>
      {/* main-end */}
    </>
  );
}

export default App;
