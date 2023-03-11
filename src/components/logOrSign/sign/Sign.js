import { useState } from "react";

import { registerUser } from "../../../utils/user";

const Sign = ({ user, setUser }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e, setUser) => {
    e.preventDefault();
    try {
      const userData = await registerUser(e, username, password);
      console.log("userData: ", userData);

      if (userData.message === "success") {
        setUser(userData.user);
      }

      //   await setUser(await registerUser(username, password).user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-container">
      <form onSubmit={(e) => handleSubmit(e, setUser)}>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button tpye="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Sign;
