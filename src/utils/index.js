export const handleDeleteTodo = async (
  e,
  state,
  setter,
  todo,
  deleteFunc,
  url,
  setMessage
) => {
  e.preventDefault();

  const { setActiveTodos, setDoneTodos } = setter;

  const deletedTodo = await deleteFunc(todo, url);

  try {
    if (deletedTodo > 0 && url === "activetodos/deleteactivetodo") {
      await setActiveTodos((el) =>
        state.activeTodos.filter((el) => el !== todo)
      );
      setMessage("Active todo deleted");
    } else if (deletedTodo > 0 && url === "donetodos/deletedonetodo") {
      await setDoneTodos((el) => state.doneTodos.filter((el) => el !== todo));
      setMessage("Done todo deleted");
    } else if (deletedTodo === 0) {
      setMessage("Something went wrong");
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};
