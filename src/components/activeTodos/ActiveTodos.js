import Todo from "../todo/Todo";
import "./ActiveTodos.css";

import { deleteActiveOrDoneTodo } from "../../utils/todo";

const ActiveTodos = ({
  activeTodos,
  setActiveTodos,
  doneTodos,
  setDoneTodos,
  handleDeleteTodo,
  user,
  setMessage,
}) => {
  const handleTick = async (
    e,
    doneTodos,
    setDoneTodos,
    todo,
    setActiveTodos,
    activeTodos,
    addDoneTodoToDb
  ) => {
    e.preventDefault();

    try {
      const newDoneTodo = await addDoneTodoToDb(todo);

      if (newDoneTodo.message === "success") {
        setDoneTodos((prev) => [...prev, todo]);

        setActiveTodos((el) => activeTodos.filter((el) => el !== todo));
        setMessage("Active todo added to Done");
      } else {
        setMessage("Something went wrong");
        throw new Error("Some error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="active-todo-container">
      {activeTodos
        ? activeTodos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              setDoneTodos={setDoneTodos}
              activeTodos={activeTodos}
              handleDeleteTodo={handleDeleteTodo}
              handleTick={handleTick}
              doneTodos={doneTodos}
              setActiveTodos={setActiveTodos}
              user={user}
              deleteFunc={deleteActiveOrDoneTodo}
              url={"/activetodos/deleteactivetodo"}
            />
          ))
        : null}
    </div>
  );
};

export default ActiveTodos;
