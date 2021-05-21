import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

import PercentContext from "./contexts/PercentContext";
import UserContext from "./contexts/UserContext";
import "./styles/reset.css";
import "./styles/font.css";

import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import TodayHabits from "./components/main/today/TodayHabits";
import Habits from "./components/main/habits/Habits";
import Historical from "./components/main/historical/Historical";

export default function App() {
  const [user, setUser] = useState(null);
  const [percent, setPercent] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/cadastro" exact>
            <SignUp />
          </Route>
          <PercentContext.Provider value={{ percent, setPercent }}>
            <Route path="/hoje" exact>
              <TodayHabits />
            </Route>
            <Route path="/habitos" exact>
              <Habits />
            </Route>
            <Route path="/historico" exact>
              <Historical />
            </Route>
          </PercentContext.Provider>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
