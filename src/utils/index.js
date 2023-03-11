export const handleDeleteTodo = async (
  e,
  state,
  setter,
  todo,
  deleteFunc,
  url,
  setMessage,
  setDeletionMessage
) => {
  e.preventDefault();

  const { setActiveTodos, setDoneTodos } = setter;

  const deletedTodo = await deleteFunc(todo, url);

  try {
    if (deletedTodo > 0 && url === "activetodos/deleteactivetodo") {
      console.log("setter in index.js active: ", setter);
      await setActiveTodos((el) =>
        state.activeTodos.filter((el) => el !== todo)
      );
      setMessage("Active todo deleted");
    } else if (deletedTodo > 0 && url === "donetodos/deletedonetodo") {
      console.log("setter in index.js done: ", setter);
      await setDoneTodos((el) => state.doneTodos.filter((el) => el !== todo));
      setMessage("Done todo deleted");
    } else if (deletedTodo === 0) {
      console.log("setter in index.js error: ", setter);
      console.log("doesn't exist");
      setMessage("Something went wrong");
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};
