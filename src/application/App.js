import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext";
import "./styles/reset.css";
import "./styles/font.css";

import Login from "./components/login/Login";
import SignIn from "./components/login/SignIn";
import TodayHabits from "./components/main/TodayHabits";
import Habits from "./components/main/Habits";
import Historical from "./components/main/Historical";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/cadastro" exact>
            <SignIn />
          </Route>
          <Route path="/hoje" exact>
            <TodayHabits />
          </Route>
          <Route path="/habitos" exact>
            <Habits />
          </Route>
          <Route path="/historico" exact>
            <Historical />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
