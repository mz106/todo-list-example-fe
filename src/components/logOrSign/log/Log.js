import { useState } from "react";

import { login } from "../../../utils/user";

const Log = ({ user, setUser, setActiveTodos, setDoneTodos }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e, setUser, setActiveTodos, setDoneTodos) => {
    e.preventDefault();
    console.log("log setActive todos: ", setActiveTodos);
    try {
      const userData = await login(e, username, password);

      if (userData.message === "success") {
        setUser(userData.user);
        setActiveTodos(userData.activeTodos);
        setDoneTodos(userData.doneTodos);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="log-container">
      <form
        onSubmit={(e) => handleSubmit(e, setUser, setActiveTodos, setDoneTodos)}
      >
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button tpye="submit">Login</button>
      </form>
    </div>
  );
};

export default Log;
