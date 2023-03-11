import "./TodoListsContainer.css";
import ActiveTodos from "../activeTodos/ActiveTodos";
import DoneTodos from "../doneTodos/DoneTodos";

const TodoListsContainer = ({
  activeTodos,
  setActiveTodos,
  doneTodos,
  setDoneTodos,
  user,
}) => {
  return (
    <div className="todo-lists-container">
      <ActiveTodos
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
        doneTodos={doneTodos}
        setDoneTodos={setDoneTodos}
        user={user}
      />
      <DoneTodos
        doneTodos={doneTodos}
        setDoneTodos={setDoneTodos}
        user={user}
      />
    </div>
  );
};

export default TodoListsContainer;
