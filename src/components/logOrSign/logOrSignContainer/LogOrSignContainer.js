import React from "react";
import "./LogOrSignContainer.css";

import Log from "../log/Log";
import Sign from "../sign/Sign";

const LogOrSignContainer = ({ user, setUser }) => {
  return (
    <>
      <Log user={user} setUser={setUser} />
      <Sign user={user} setUser={setUser} />
    </>
  );
};

export default LogOrSignContainer;
