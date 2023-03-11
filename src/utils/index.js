export const handleDeleteTodo = async (
  e,
  state,
  setter,
  todo,
  deleteFunc,
  url
) => {
  e.preventDefault();
  const deletedTodo = await deleteFunc(todo, url);

  if (deletedTodo > 0 && url === "/activetodos/deleteactivetodo") {
    await setter.setActiveTodos((el) =>
      state.activeTodos.filter((el) => el !== todo)
    );
  } else if (deletedTodo > 0 && url === "/donetodos/deletedonetodo") {
    await setter.setDoneTodos((el) =>
      state.doneTodos.filter((el) => el !== todo)
    );
  } else {
    console.log("doesn't exist");
  }
};
