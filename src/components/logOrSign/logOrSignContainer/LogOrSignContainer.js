import React from "react";
import "./LogOrSignContainer.css";

import Log from "../log/Log";
import Sign from "../sign/Sign";
import LogOut from "../logOut/LogOut";

const LogOrSignContainer = ({
  user,
  setUser,
  setActiveTodos,
  setDoneTodos,
}) => {
  console.log("logorsign setactivetodos: ", setActiveTodos);

  return (
    <>
      <Log
        user={user}
        setUser={setUser}
        setActiveTodos={setActiveTodos}
        setDoneTodos={setDoneTodos}
      />
      <Sign user={user} setUser={setUser} />
      <LogOut
        setUser={setUser}
        setActiveTodos={setActiveTodos}
        setDoneTodos={setDoneTodos}
      />
    </>
  );
};

export default LogOrSignContainer;
