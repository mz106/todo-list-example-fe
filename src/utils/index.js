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
  console.log("handledeletetodo setters: ", setter);
  if (url === "/activetodos/deleteactivetodo") {
    await setter.setActiveTodos((el) =>
      state.activeTodos.filter((el) => el !== todo)
    );
  } else if (url === "/donetodos/deletedonetodo") {
    await setter.setDoneTodos((el) =>
      state.doneTodos.filter((el) => el !== todo)
    );
  }
};
