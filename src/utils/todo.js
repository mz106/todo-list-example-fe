import { getTokenFromCookie } from "../common";

export const addActiveTodoToDb = async (todoText, username) => {
  try {
    const token = await getTokenFromCookie("jwt_token");

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}activetodos/addtodo`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          todo: todoText,
        }),
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addDoneTodoToDb = async (todoText) => {
  try {
    const token = await getTokenFromCookie("jwt_token");

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}donetodos/adddonetodo`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          todo: todoText,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteActiveOrDoneTodo = async (todo, url) => {
  try {
    const token = await getTokenFromCookie("jwt_token");

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        todo: todo,
      }),
    });

    let deletionSuccess;

    if (response.ok && response.status === 204) {
      deletionSuccess = 1;
    } else {
      deletionSuccess = 0;
    }

    return deletionSuccess;
  } catch (error) {
    console.log(error);
  }
};
