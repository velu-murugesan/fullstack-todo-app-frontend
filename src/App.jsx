import React, { useEffect, useState } from "react";
import {
  getAllTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} from "./hooks/useContext";
import Message from "./message/Message.jsx";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");
  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  function updateMode(_id, text) {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  }

  return (
    <>
      <div className='header'>
        <div className='heading'>
          <h1 className='text'>Note's App</h1>
        </div>
        <div className='row'>
          <div className='input-head'>
            <input
              type='text'
              placeholder='Type here ...'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            className='btn-1'
            onClick={
              isUpdating
                ? () =>
                    updateTodo(text, setText, setIsUpdating, todoId, setTodo)
                : () => saveTodo(text, setText, setTodo)
            }>
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>

        <div className='text'>
          {todo.map((value) => (
            <Message
              key={value._id}
              text={value.text}
              updateMode={() => updateMode(value._id, value.text)}
              deleteTodo={() => deleteTodo(value._id, setTodo)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
