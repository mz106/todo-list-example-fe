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
}) => {
  const stateSetters = {
    setActiveTodos: setActiveTodos,
    setDoneDone: setDoneTodos,
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
            activeTodos,
            stateSetters,
            todo,
            user.username,
            deleteFunc,
            url
          )
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
