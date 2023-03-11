import { getTokenFromCookie } from "../common";

export const addActiveTodoToDb = async (todoText, username) => {
  try {
    const token = await getTokenFromCookie("jwt_token");

    const response = await fetch("http://localhost:5001/activetodos/addtodo", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        todo: todoText,
      }),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addDoneTodoToDb = async (todoText) => {
  try {
    const token = await getTokenFromCookie("jwt_token");

    const response = await fetch(
      "http://localhost:5001/donetodos/adddonetodo",
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

    const response = await fetch(`http://localhost:5001${url}`, {
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

    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

// used in useEffect App.js to get all user active todos on render
export const getAllUserActiveTodos = async () => {
  try {
    const token = await getTokenFromCookie("jwt_token");

    const response = await fetch(
      "http//localhost:5001/activetodos/getalluseractivetodos",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );

    console.log("response getAllUserActiveTodos: ", response);
    const data = await response.json();
    console.log("data getAllUserActiveTodos: ", data);
  } catch (error) {
    console.log(error);
  }
};
