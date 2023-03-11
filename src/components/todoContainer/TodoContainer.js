import TodoListsContainer from "../todoListsContainer/TodoListsContainer";
import AddTodo from "../addTodo/AddTodo";

import "./TodoContainer.css";

const TodoContainer = ({
  activeTodos,
  setActiveTodos,
  doneTodos,
  setDoneTodos,
  user,
  setMessage,
}) => {
  return (
    <div class="todo-container">
      <TodoListsContainer
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
        doneTodos={doneTodos}
        setDoneTodos={setDoneTodos}
        user={user}
        setMessage={setMessage}
      />
      <AddTodo
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
        user={user}
        setMessage={setMessage}
      />
    </div>
  );
};

export default TodoContainer;
