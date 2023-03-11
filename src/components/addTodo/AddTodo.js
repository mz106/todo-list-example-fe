import { useState } from "react";

import { addActiveTodoToDb } from "../../utils/todo";

import "./AddTodo.css";

const AddTodo = ({ activeTodos, setActiveTodos, user, setMessage }) => {
  const [text, setText] = useState("");

  const textChangeHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log(text);
  };

  const todoSubmitHandler = async (e) => {
    e.preventDefault();

    const newTodo = await addActiveTodoToDb(text, user.username);
    console.log("newTodo.todo: ", newTodo.todo);
    if (newTodo) {
      const tempArr = [...activeTodos, newTodo.todo];
      setActiveTodos(tempArr);
      setMessage("Todo added to DB");
    }

    e.target.reset();
  };

  return (
    <div>
      {user ? (
        <form onSubmit={todoSubmitHandler}>
          <textarea onChange={textChangeHandler}></textarea>
          <button value="add" type="submit">
            Add Todo
          </button>
        </form>
      ) : (
        <div>
          <h2>Please log in</h2>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
