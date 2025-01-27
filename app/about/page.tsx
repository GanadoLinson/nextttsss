"use client"
/* eslint-disable */
import {useEffect, useState} from "react"

export default function about() {

  const [count, setCount] = useState(0);

  

  const [text, setText] = useState("");

  const handleClick = () => {
    setCount(count + 1);
    console.log("Linson Pogi".repeat(count)); 
  };

  

  return (
    <><div className="flex flex-col h-screen items-center justify-center" id="sample">
      <h1 className="text-4xl">You clicked the button {count} times</h1>
      <button className="bg-gray-500 p-5 rounded-lg hover:bg-blue-500 transition"
        onClick={handleClick}

      >Click Me</button>

    </div><div className="flex flex-col h-screen items-center justify-center" id="sample">
        <h1 className="text-4xl">{text}</h1>
        <div className="flex space-x-4 mt-4">
          <button
            className="bg-gray-500 p-5 rounded-lg hover:bg-blue-500 transition"
            onClick={() => setText("Hello")}
          >
            Set Hello
          </button>
          <button
            className="bg-gray-500 p-5 rounded-lg hover:bg-green-500 transition"
            onClick={() => setText("Hi")}
          >
            Set Hi
          </button>
        </div>
      </div></>
    
  )
  
}
