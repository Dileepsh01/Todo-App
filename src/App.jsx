import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
const inputref= useRef()
  const handlebtn = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]); // ✅ correct way
    setTask(""); // clear input

  };
  useEffect(()=>{
inputref.current.focus()
  }, [todos])

  const handledelete = (index)=>{
    const newtodos = todos.filter((_, i)=>i!==index)
    setTodos(newtodos)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Todo App
        </h2>

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={task}
            ref={inputref}
            onChange={(e) => setTask(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") handlebtn()
  }}

            placeholder="Enter your task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handlebtn}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition duration-200"
          >
            Add
          </button>
          <button
            onClick={() => setTodos([])}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition duration-200"
          >
            Reset
          </button>
        </div>
         {todos.length === 0 && (
          <p className="text-center text-gray-500">No tasks available</p>
        )}

        {/* ✅ Todo List */}

        
       <div>
        
  {todos.map((todo, index) => (
    <div 
      key={index} 
      className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg mb-2"
    >
      <p>{todo}</p>

      <button
        onClick={() => handledelete(index)}   // ✅ index pass
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
      >
        ❌
      </button>
    </div>
  ))}
</div>

 <p className="text-center mt-3 text-gray-600">
          Total Tasks: {todos.length}
        </p>
      </div>
    </div>
  );
};

export default App;
