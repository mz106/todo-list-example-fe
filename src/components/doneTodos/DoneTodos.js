import { handleDeleteTodo } from "../../utils";
import { deleteActiveOrDoneTodo } from "../../utils/todo";
import "./DoneTodos.css";

import Todo from "../todo/Todo";

const DoneTodos = ({ doneTodos, setDoneTodos, user, setMessage }) => {
  return (
    <div className="done-todo-container">
      {doneTodos
        ? doneTodos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              setDoneTodos={setDoneTodos}
              handleDeleteTodo={handleDeleteTodo}
              doneTodos={doneTodos}
              user={user}
              deleteFunc={deleteActiveOrDoneTodo}
              url={"/donetodos/deletedonetodo"}
              setMessage={setMessage}
            />
          ))
        : null}
    </div>
  );
};

export default DoneTodos;

// {
//   doneTodos
//     ? doneTodos.map((doneTodo) => (
//         <>
//           <p>{doneTodo.todo}</p>
//           <button
//             onClick={(e) =>
//               handleDeleteTodo(e, doneTodos, setDoneTodos, doneTodo)
//             }
//           >
//             Delete
//           </button>
//         </>
//       ))
//     : null;
// }
