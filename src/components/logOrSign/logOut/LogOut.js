import { logOut } from "../../../utils";

const LogOut = ({ setUser, setActiveTodos, setDoneTodos }) => {
  return (
    <div>
      <button onClick={(e) => logOut(e, setUser, setActiveTodos, setDoneTodos)}>
        LogOut
      </button>
    </div>
  );
};

export default LogOut;
