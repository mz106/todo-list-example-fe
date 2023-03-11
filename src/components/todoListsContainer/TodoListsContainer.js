import "./TodoListsContainer.css";
import ActiveTodos from "../activeTodos/ActiveTodos";
import DoneTodos from "../doneTodos/DoneTodos";

const TodoListsContainer = ({
  activeTodos,
  setActiveTodos,
  doneTodos,
  setDoneTodos,
  user,
  setMessage,
}) => {
  return (
    <div className="todo-lists-container">
      <ActiveTodos
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
        doneTodos={doneTodos}
        setDoneTodos={setDoneTodos}
        user={user}
        setMessage={setMessage}
      />
      <DoneTodos
        doneTodos={doneTodos}
        setDoneTodos={setDoneTodos}
        user={user}
        setMessage={setMessage}
      />
    </div>
  );
};

export default TodoListsContainer;
