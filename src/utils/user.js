import { writeCookie } from "../common";

export const registerUser = async (e, username, password) => {
  try {
    const response = await fetch("http://localhost:5001/users/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
    writeCookie("jwt_token", data.user.token, 7);

    e.target.reset();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// login without cookie in storage
export const login = async (e, username, password) => {
  console.log("login hit");
  try {
    const response = await fetch("http://localhost:5001/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    writeCookie("jwt_token", data.user.token, 7);

    e.target.reset();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const authCheck = async (jwtToken) => {
  try {
    const response = await fetch("http://localhost:5001/users/authcheck", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwtToken}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
