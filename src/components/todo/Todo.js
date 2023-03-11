import { handleDeleteTodo } from "../../utils";
import { addDoneTodoToDb } from "../../utils/todo";

const Todo = ({
  todo,
  activeTodos,
  handleTick,
  setDoneTodos,
  setActiveTodos,
  doneTodos,
  user,
  deleteFunc,
  url,
  setMessage,
  setDeletionMessage,
}) => {
  const stateSetters = {
    setActiveTodos: setActiveTodos,
    setDoneTodos: setDoneTodos,
  };

  const state = {
    activeTodos: activeTodos,
    doneTodos: doneTodos,
  };

  return (
    <div>
      <p>{todo.todo}</p>
      {activeTodos ? (
        <button
          onClick={(e) =>
            handleTick(
              e,
              doneTodos,
              setDoneTodos,
              todo,
              setActiveTodos,
              activeTodos,
              addDoneTodoToDb
            )
          }
        >
          Tick
        </button>
      ) : null}
      <button
        onClick={(e) =>
          handleDeleteTodo(
            e,
            state,
            stateSetters,
            todo,
            deleteFunc,
            url,
            setMessage,
            setDeletionMessage
          )
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
