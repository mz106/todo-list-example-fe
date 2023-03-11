export const handleDeleteTodo = async (
  e,
  state,
  settter,
  todo,
  username,
  deleteFunc,
  url
) => {
  e.preventDefault();
  const deletedTodo = await deleteFunc(todo, url);
  await settter((el) => state.filter((el) => el !== todo));
};
