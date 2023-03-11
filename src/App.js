import { useState, useEffect } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TodoContainer from "./components/todoContainer/TodoContainer";
import LogOrSignContainer from "./components/logOrSign/logOrSignContainer/LogOrSignContainer";

import { getTokenFromCookie } from "./common";
import { authCheck } from "./utils/user";
import { getAllUserActiveTodos } from "./utils/todo";

function App() {
  const [activeTodos, setActiveTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");

      if (token === false) {
        setUser(null);
      } else {
        loginWithToken(token);
      }
    }
  }, []);

  const loginWithToken = async (token) => {
    const persistantUser = await authCheck(token);

    await setUser(persistantUser.user);
    await setActiveTodos(persistantUser.activeTodos);
    await setDoneTodos(persistantUser.doneTodos);
  };

  return (
    <>
      <Header user={user} />
      <div className="user-ops-container">
        <LogOrSignContainer user={user} setUser={setUser} />
      </div>

      <TodoContainer
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
        doneTodos={doneTodos}
        setDoneTodos={setDoneTodos}
        user={user}
      />
      <Footer />
    </>
  );
}

export default App;
